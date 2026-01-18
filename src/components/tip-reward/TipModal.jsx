import React, { useEffect, useState } from 'react';
import Success from './Success';
import './TipModal.scss';
import { fetchBalances, isAccountValid } from '../../hive-api/api';
import { useAppStore } from '../../lib/store';
import { toast } from 'sonner';
import { LineSpinner } from 'ldrs/react';
import 'ldrs/react/LineSpinner.css';
import { QRCodeSVG } from 'qrcode.react';
import { KeyTypes, Providers } from '@aioha/aioha';
import aioha from "../../hive-api/aioha";

const TipModal = ({ recipient, isOpen, onClose, onSendTip }) => {
  const { user: activetUser } = useAppStore();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("HIVE");
  const [memo, setMemo] = useState("");
  const [step, setStep] = useState(1);
  const [balances, setBalances] = useState({});
  const [selectedBalance, setSelectedBalance] = useState();
  const [loading, setLoading] = useState(false);

  const [qrPayload, setQrPayload] = useState(null);
  const FORCE_HIVEAUTH = true; // Set to false to allow Keychain when available

  useEffect(() => {
    getbalance();
  }, []);

  useEffect(() => {
    if (balances && currency) {
      const value = currency === 'HIVE' ? balances.hive : balances.hbd;
      setSelectedBalance(value);
    }
  }, [balances, currency]);

  const getbalance = async () => {
    setLoading(true);
    try {
      const data = await fetchBalances(activetUser);
      setBalances(data);
    } catch (err) {
      console.log("error fetching this data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setAmount("");
    setCurrency("HIVE");
    setMemo("");
    setQrPayload(null);
    onClose();
  };

  const handleSubmitTransfer = async () => {
    if (!amount || !recipient || !currency) {
      toast.error("All fields are required");
      return;
    }

    if (amount > selectedBalance) {
      toast.error("Insufficient balance");
      return;
    }

    const valid = await isAccountValid(recipient);
    if (!valid) {
      toast.error("Invalid username");
      return;
    }

    try {
      const transferOp = [
        'transfer',
        {
          from: activetUser,
          to: recipient,
          amount: `${parseFloat(amount).toFixed(3)} ${currency}`,
          memo: memo || ''
        }
      ];

      // Force HiveAuth by explicitly specifying the provider
      if (FORCE_HIVEAUTH) {
        const result = await aioha.signAndBroadcastTx([transferOp], KeyTypes.Active, {
          provider: Providers.HiveAuth,
          hiveauth: {
            cbWait: (payload) => {
              setQrPayload(payload);
            }
          }
        });

        if (result.error) {
          if (result.error === "HiveAuth authentication request expired") {
            toast.error("HiveAuth authentication request expired");
            setQrPayload(null);
          } else {
            toast.error(`Transfer failed: ${result.error}`);
          }
        } else {
          setStep(2);
          setQrPayload(null);
        }
        return;
      }

      // Use Keychain if available and not forcing HiveAuth
      if (window.hive_keychain) {
        window.hive_keychain.requestBroadcast(
          activetUser,
          [transferOp],
          'Active',
          async (response) => {
            if (response.success) {
              setStep(2);
            } else {
              toast.error(`Transfer failed: ${response.message}`);
            }
          }
        );
        return;
      }

      // Fallback to HiveAuth
      const result = await aioha.signAndBroadcastTx([transferOp], KeyTypes.Active, {
        provider: Providers.HiveAuth,
        hiveauth: {
          cbWait: (payload) => {
            setQrPayload(payload);
          }
        }
      });

      if (result.error) {
        if (result.error === "HiveAuth authentication request expired") {
          toast.error("HiveAuth authentication request expired");
          setQrPayload(null);
        } else {
          toast.error(`Transfer failed: ${result.error}`);
        }
      } else {
        setStep(2);
        setQrPayload(null);
      }

    } catch (error) {
      toast.error("Error processing transfer");
      console.error(error);
      setQrPayload(null);
    }
  };

  return (
    <div className={`tip-modal ${step === 2 ? "add" : ""}`}>
      <div className={`modal-content-trx ${step === 2 ? "add" : ""}`}>

        {step === 1 && (
          <div className="tip-modal-in">
            <div className="header">
              <h2>Send a Tip to @{recipient}</h2>
            </div>

            <div className="form">
              <div className="field">
                <label>Amount: </label>
                <input
                  type="number"
                  placeholder="e.g. 1.000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Currency:</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                  <option value="HIVE">HIVE</option>
                  <option value="HBD">HBD</option>
                </select>
                <div className='balance-wrap'>
                  <span>Available balance: {currency}</span>
                  {loading ? (
                    <LineSpinner size="10" stroke="3" speed="1" color="red" />
                  ) : (
                    <span>
                      {currency === "HIVE" ? balances.hive : balances.hbd}
                    </span>
                  )}
                </div>
              </div>

              <div className="field">
                <label>Memo (optional):</label>
                <input
                  type="text"
                  placeholder="e.g. Thanks for this amazing content!"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                />
              </div>

              {qrPayload && (
                <div className="qr-wrap">
                  <p>Scan with your Hive wallet to approve transfer</p>
                  <QRCodeSVG value={qrPayload} size={220} />
                </div>
              )}

              <div className="actions">
                <button className="cancel-btn" onClick={handleClose}>
                  Cancel
                </button>
                <button className="send-btn" onClick={handleSubmitTransfer}>
                  Send Tip
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <Success
            amount={amount}
            currency={currency}
            onClose={handleClose}
          />
        )}

      </div>
    </div>
  );
};

export default TipModal;