kesolink
kesolink
Invisible

k-banti — 11/24/2025 9:00 PM
I didn't know
Weytin I know 😭
kesolink — 11/24/2025 9:01 PM
When I get a job u most have a pc
Immediately the job start given you tasks higher than your pc they most buy it for you.
So that the logic behind it
My work pass my pc by fat but my boss no gree look my side
k-banti — 11/24/2025 9:02 PM
Oh! Okay
Now I get
kesolink — 11/25/2025 9:16 AM
P5jx16YsapwG2d4PxIGxzzozXJ1jdT75rwx4H1G0mi2fKg770u5w
kesolink — 11/25/2025 10:18 AM
https://deepwiki.com/ecency/vision-next
DeepWiki
ecency/vision-next | DeepWiki
The ecency/vision-next repository is a decentralized social media platform built on the Hive blockchain. It provides a complete web application for content creation, social interaction, cryptocurrency
kesolink — 11/28/2025 7:45 AM
https://readdy.link/share/693051f953a0c2d465e307e970866d31
kesolink — 11/28/2025 8:03 AM
https://readdy.link/share/62d0652af4754b72ee80d28aa0e40217
kesolink — 11/28/2025 11:19 AM
TR0578in^&
For the support - AF26nf+×
kesolink — 11/28/2025 7:01 PM
the issue is that when a user click the uploadVideoTo3Speak the VideoUploadStatus component start showing the progress of the upload. some time the user don't want to wait an keep watching the progress. they want to leave the page then go somewhere else. now i am ask to make upload flow in a way that when a leave the page and go to their profile page where his video is, he should be able to see the video status.
kesolink — 11/29/2025 10:13 AM
Image
Image
kesolink — 11/29/2025 12:02 PM
git init
git add .
git commit -m “first commit”
for branch -M branch-name

git remote add project-name git-repo-url


git pull project-name branch-name
kesolink — 11/30/2025 9:52 AM
You want a modal that, on mobile screens, appears centered from the bottom to the middle, taking 50% of the screen height. On larger screens, it can remain fully centered.
kesolink — 12/2/2025 10:09 PM
5JTxsjygz6h5xxcnQ5UaMLW8wNV2f5vcz35tTBjMxsdk1vM96un
this is the posting key
kesolink — 12/3/2025 10:19 AM
https://3speak.sagarkothari88.one/
3Speak - Videos
Discover trending videos, explore new content, and connect with creators on 3Speak.
kesolink
 pinned a message to this channel. See all pinned messages. — 12/3/2025 10:19 AM
kesolink — 12/4/2025 3:48 PM
@media (max-width: 768px) {
  em-emoji-picker {
    position: absolute !important;
    right: 20px !important;
  }
}
kesolink — 12/6/2025 5:25 AM
4.18K
28h
148
:thumbsup:
No Games
Ezabay
LVL
7.9K
kesolink — 12/8/2025 11:38 AM
POST /api/upload/prepare
↓
POST /api/upload/thumbnail/:video_id (optional)
↓
TUS upload to /files
↓
GET /api/upload/video/:id/status (poll every 5 sec)
↓
status: uploaded → encoding_ipfs → published ✅
kesolink — 12/10/2025 10:09 AM
i gave you 5 component   
LegacyUploadContext, VideoUploadStep1 ,Thumbnail Details, Preview and VideoUploadStatus 
   maintain changes on the  component files the way it is. i don't have any file like VideoUploadStep3  but detail.jsx
i will provide the Detail.jsx file make sure u dont chnage the jsx just make the provement on it.
  keep UploadStatusIndicator.jsx . 
kesolink — 12/11/2025 6:35 PM
the amazing thing now is, the background upload is now working. so user can save then leave the  page, it will then upload automatically when video upload is complete.
kesolink — 12/11/2025 11:19 PM
https://github.com/Mantequilla-Soft/3speakuploadservice/blob/main/docs/UPLOAD_FIRST_AUTO_SUBMIT.md
GitHub
3speakuploadservice/docs/UPLOAD_FIRST_AUTO_SUBMIT.md at main · Man...
Contribute to Mantequilla-Soft/3speakuploadservice development by creating an account on GitHub.
kesolink — 12/11/2025 11:39 PM
VITE_GRAPHQL_API_URL="https://union.us-02.infra.3speak.tv/api/v2/graphql"
VITE_DEFAULT_HIVE_NODE="https://rpc.ausbit.dev/"
VITE_APP_VIDEO_CDN_DOMAIN="https://threespeakvideo.b-cdn.net/"
VITE_API_URL_FROM_WEST="https://acela.us-02.infra.3speak.tv/api"
VITE_MAGIC_PUBLISHABLE_KEY="pk_live_AE5AC961967ABB4F"
VITE_MAGIC_SECRET_KEY="sk_live_531649700391A175"
VITE_MONGODB_URI="mongodb+srv://kesolink:kesolink1234@3speak-cluster.h1xbw.mongodb.net/?retryWrites=true&w=majority&appName=3speak-cluster"
VITE_JWPLAYER_LICENSE_KEY="6A187VGxhSB65jBlTtuEk7U0pu+jYZ21fZE9AOU/d6CSMV2b"
VITE_UPLOAD_TOKEN="gJTe63FNQ7a"
VITE_UPLOAD_URL="https://video.3speak.tv/"
VITE_HIVE_USER="threespeak-app"
VITE_HIVE_POSTING_KEY="5JTxsjygz6h5xxcnQ5UaMLW8wNV2f5vcz35tTBjMxsdk1vM96un"
VITE_HIVE_USER="kesolink"
VITE_HIVE_POSTING_KEY="5JxrS6DFUWGRu87XyNhUETGuEJdnG1weKcLE3SPFWBst4fnxyPN"
kesolink — 12/13/2025 12:21 PM
Image
kesolink — 12/16/2025 7:05 PM
i want if the uploadStatus or uploadStatusRef is true, i want to show save else Post Video on the button on preview component.
so when user click the button  we call handlePostVideo, so on handlePostVideo if the uploadStatus is false i want to show a mofal that will say "your video is still uploading, you can submit so it automatically upload immediatly after upload. so i want to show a button on the modal that will call
kesolink — 12/23/2025 3:54 AM
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Include all modules needed by keychain-sdk and hive crypto libraries
      include: [
        "buffer",
        "stream",
        "crypto",
        "util",
        "process",
        "querystring",
        "events",
        "string_decoder",
      ],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // Use polyfills even in dev mode
      protocolImports: true,
      // Override to ensure proper Buffer implementation
      overrides: {
        fs: "memfs",
      },
    }),
  ],

  define: {
    "process.env": {},
    global: "globalThis",
  },

  resolve: {
    alias: {
      // Ensure browser-compatible versions of Node.js modules
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      util: "util/",
      querystring: "querystring-es3",
      // Force readable-stream to use the polyfilled buffer
      buffer: "buffer",
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      // ❌ REMOVED Buffer inject (this caused duplicate declaration)
    },
    include: [
      "buffer",
      "react-quilljs",
      "quill",
      "qrcode.react",
      "hive-auth-wrapper",
      "keychain-sdk",
      "readable-stream",
    ],
    exclude: ["@metamask/providers", "web3"],
  },

  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  css: {
    devSourcemap: true,
  },
});
kesolink — 12/23/2025 4:23 AM
rgb(59, 59, 59)
kesolink — 12/23/2025 8:01 AM
border: 1px solid #1e293b;
              background: rgba(15, 23, 42, 0.8);
Image
kesolink — 12/23/2025 10:21 AM
Image
kesolink — 12/23/2025 1:26 PM
https://github.com/Mantequilla-Soft/new-3speak-tv/pull/105
kesolink — 12/25/2025 11:57 PM
import React, { useRef, useState } from 'react'
import { Upload } from "lucide-react";
import "./VideoUploadStep1.scss"
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";
import { toast } from 'sonner'
import Arrow from "./../../../public/images/arrow.png"
Expand
message.txt
6 KB
kesolink — 12/26/2025 4:20 PM
https://deepwiki.com/spknetwork/3speak-legacy-frontend
DeepWiki
spknetwork/3speak-legacy-frontend | DeepWiki
This document provides a comprehensive overview of the 3Speak legacy frontend repository, a decentralized video platform built on the Hive blockchain. The system enables content creators to upload, pu
spknetwork/3speak-legacy-frontend | DeepWiki
kesolink — 1/6/2026 6:54 AM
https://youtu.be/fLIl6jypzkI?si=_249eWHksLogwQYi
YouTube
Codesistency
Build a Full Stack Mobile App with React Native & Expo - React Nati...
Image
kesolink — 1/13/2026 3:41 PM
Hello
It's now working
kesolink — 1/14/2026 1:07 AM
<h2
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalUser(video.author?.username  video.author 
 video.owner);
                  }}
                >
                  {video.author?.username  video.author 
 video.owner}
                </h2>
kesolink — 1/14/2026 1:16 AM
tag-wrapper{
            margin-top: 10px;
            @include mix.respond(phone) {
                display: flex;
                flex-wrap: wrap;

              }
            span{
                padding: 2px 10px;
                background-color: var(--accent-light);
                border-radius: 8px;
                margin-right: 3px;
                font-size: 14.35px;
                color: var(--text-primary);
                @include mix.respond(phone) {
                    margin-bottom: 5px;
                    font-size: 12.35px;

                  }

            }
        }
color: var(--text-inverse);
        background: var(--accent-primary);
kesolink — 1/14/2026 1:25 AM
https://www.figma.com/design/OwvgIErVpBpwKSFUMGqRBG/Untitled?node-id=155-2&t=AD1QWaQSMxXTu545-1
Figma
Untitled
Created with Figma
Image
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.19628 1.19628C-9.73787e-08 2.39256 0 4.31794 0 8.16872C0 12.0194 -9.73787e-08 13.9449 1.19628 15.1411C2.39256 16.3374 4.31794 16.3374 8.16872 16.3374C12.0194 16.3374 13.9449 16.3374 15.1411 15.1411C16.3374 13.9449 16.3374 12.0194 16.3374 8.16872C16.3374 4.31794 16.3374 2.39256 15.1411 1.19628C13.9449 -9.73787e-08 12.0194 0 8.16872 0C4.31794 0 2.39256 -9.73787e-08 1.19628 1.19628ZM12.2531 8.71333C12.2531 12.1986 9.34861 13.0699 7.89645 13.0699C6.62573 13.0699 4.08436 12.1986 4.08436 8.71333C4.08436 7.19737 4.95263 6.23498 5.6821 5.75056C6.01561 5.5291 6.43042 5.67065 6.45199 6.07042C6.49916 6.94512 7.17328 7.64772 7.69534 6.94431C8.17313 6.30051 8.40896 5.42625 8.40896 4.90123C8.40896 4.12783 9.19185 3.63637 9.80311 4.11021C10.9945 5.03381 12.2531 6.58055 12.2531 8.71333Z" fill="#127286"/>
</svg>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19628 1.19628C-9.73787e-08 2.39256 0 4.31794 0 8.16872C0 12.0194 -9.73787e-08 13.9449 1.19628 15.1411C2.39256 16.3374 4.31794 16.3374 8.16872 16.3374C12.0194 16.3374 13.9449 16.3374 15.1411 15.1411C16.3374 13.9449 16.3374 12.0194 16.3374 8.16872C16.3374 4.31794 16.3374 2.39256 15.1411 1.19628C13.9449 -9.73787e-08 12.0194 0 8.16872 0C4.31794 0 2.39256 -9.73787e-08 1.19628 1.19628ZM12.2531 8.71333C12.2531 12.1986 9.34861 13.0699 7.89645 13.0699C6.62573 13.0699 4.08436 12.1986 4.08436 8.71333C4.08436 7.19737 4.95263 6.23498 5.6821 5.75056C6.01561 5.5291 6.43042 5.67065 6.45199 6.07042C6.49916 6.94512 7.17328 7.64772 7.69534 6.94431C8.17313 6.30051 8.40896 5.42625 8.40896 4.90123C8.40896 4.12783 9.19185 3.63637 9.80311 4.11021C10.9945 5.03381 12.2531 6.58055 12.2531 8.71333Z" fill="red"/>
</svg>
kesolink — 1/15/2026 2:54 PM
🎬 Processing (uploading)...
🎬 🎬 Encoding: 0%
kesolink — 11:31 AM
TipModal
@use "../../mixins.scss" as mix;
.tip-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
Expand
TipModal.scss
3 KB
TipModal
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
... (137 lines left)
Collapse
TipModal.jsx
7 KB
﻿
k-banti
olowu_kayo
 
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
