# 🧾 pay.rafala.xyz — Multichain Merchant Payments (MVP)

**pay.rafala.xyz** is the flagship dApp for merchant payments in the **Rafala** protocol — offering **cross-chain transfers**, **zkPrivacy**, and **quantum-safe architecture** via a fully decentralized frontend.

---

## 🎨 Branding (Elegant Disruptor)

| Color Name        | Hex Code  | Role                                      |
| ----------------- | --------- | ----------------------------------------- |
| **Noir Nebula**   | `#0F0F0F` | Primary background                        |
| **Glacier White** | `#F1F1F1` | Text / UI highlight                       |
| **Graphite Grey** | `#1C1C1E` | Cards, neutral elements                   |
| **Rust Gold**     | `#C08A2D` | Primary accent (buttons, calls to action) |
| **Steel Blue**    | `#3A4F63` | Sub-accent, professional tone             |
| **Muted Rose**    | `#AD6A6A` | Warning / subtle emotion or detail        |

- ⚛️ **React** (Vite)
- 🎨 **TailwindCSS**
- 🧠 **Space Grotesk** + **Inter** fonts
- 🎯 **Hosted on [Vercel](https://vercel.com)**

---

## 🔍 Overview

| Layer         | Description |
|---------------|-------------|
| **Landing Page** | Educates and converts — explains Rafala Pay and its benefits |
| **Merchant Flow** | Wallet-authenticated flow to create and publish preferences to IPFS |
| **Customer Flow** | Connect wallet, generate payment, sign and send USDC via CCTP |
| **zkPrivacy Layer** | Semaphore- or Noir-based proofs to shield identity and transaction origin |
| **Quantum-Safe Metadata** | Dilithium signing for long-term cryptographic durability |

---

## 🧠 Design Philosophy

> **"Trustless Payments. Optional Compliance. Permanent Privacy."**

- No backend, no server, no database.
- Every preference or payment intent is wallet-signed and pushed to IPFS.
- Authentication is **wallet-based** only (no email/password).
- Optional compliance access via Lit Protocol or MPC can be layered on top — but *opt-in only*.

---

## 🏗 Project Structure

| Route                      | Purpose |
|----------------------------|---------|
| `/`                        | Landing page for Pay — highlights benefits, merchant/customer flows |
| `/merchant`               | Authenticated dashboard for merchants to configure preferences |
| `/pay/:id`                | Dynamic payment request page for users (based on merchant config) |
| `/success`                | Confirmation screen post-payment |
| `/privacy`                | Learn about ZK layer (optional; linked from landing) |
| `/compliance`            | Info about optional compliance hooks (for auditors & regulators) |

---

## 🧩 Stack

- **Framework**: React + Vite
- **Styling**: TailwindCSS
- **Auth**: RainbowKit + wagmi (Ethereum, Arbitrum, zkSync)
- **Smart Contracts**: Circle CCTP V2 (Fast Transfer)
- **zk Layer**: Semaphore or Noir (WIP)
- **Post-Quantum Layer**: Dilithium for signed metadata
- **Storage**: IPFS (via Web3.Storage or Infura)
- **Hosting**: Vercel

---

## 🔗 Supported Chains

| Chain      | Status  | Notes |
|------------|---------|-------|
| Ethereum   | ✅      | Mainnet ready |
| Arbitrum   | ✅      | CCTP-compatible |
| zkSync Era | ✅      | Integrated into wallet selector |

---

## 🔐 Wallet Connection

- Uses **RainbowKit** for elegant and responsive wallet connection
- Chains filtered to: `Ethereum`, `Arbitrum`, `zkSync`
- Wallet auth is required to:
  - Set preferences (merchant flow)
  - Pay (customer flow)
  - Sign ZK proofs (future module)

---

## 🛠 Functional Components

### ✅ Merchant Setup Flow (`/merchant`)
> Wallet-authenticated flow

1. Connect Wallet
2. Select accepted chains and tokens (USDC)
3. Generate payment preferences and sign metadata
4. Push config to IPFS
5. Get shareable payment URL: `pay.rafala.xyz/pay/[merchant-id]`

### 💳 Customer Payment Flow (`/pay/:id`)
> Frictionless & private USDC payment via CCTP

1. Load merchant config from IPFS
2. Connect wallet
3. Choose source chain
4. Input amount
5. [optional] Prove identity via ZK
6. Sign & Send via CCTP
7. Redirect to `/success`

---

## 🎨 Landing Page Design

### Hero Section
- Tagline: “Private. Compliant. Multichain.”
- Subtext: “Accept cross-chain USDC payments with zkPrivacy and no backend.”
- CTA: `Get Started as Merchant` | `Pay Someone`

### Key Sections
- How It Works (for merchants + for users)
- Supported Chains
- ZK Privacy Layer (modular)
- Optional Compliance (MPC or Lit Protocol)
- Why Quantum-Safe?
- CTA: `Join the Future of Payments`

---

## 🧾 Optional Compliance Recovery (WIP)

- System will allow encrypted view-keys or threshold decryption using:
  - [Lit Protocol](https://litprotocol.com)
  - MPC via external quorum (design planned)
- Auditability will remain opt-in and cryptographically gated
- This is for regulators, not by default

---

## ⚠️ Notes for Codex & Contributors

- **NO DATABASES. NO BACKEND.**
- All preferences = signed and uploaded to IPFS
- RainbowKit config allows switching between Ethereum, Arbitrum, zkSync
- Use TailwindCSS and `Space Grotesk` for consistency
- Every route should be independently pre-rendered (SSR not required, but avoid dynamic complexity)
- Transitions via `Framer Motion` where UX matters (e.g., route changes, CTA reveals)
- Sensitive configs signed using PQ-safe key (Dilithium)

---

## 🚧 Status

- ✅ Merchant flow: MVP completed
- ✅ Payment UI: live with USDC CCTP transfer
- 🚧 ZK Proof integration: in progress (Semaphore/Noir)
- 🚧 Compliance layer (MPC): design phase
- 🚧 QR support for in-person payments: planned

---

## 🧠 Philosophy Reminder

**pay.rafala.xyz** isn't just a tool.  
It's the front line for **sovereign commerce** in Web3 —  
where merchants control their rails, users control their privacy,  
and compliance is a feature — not a requirement.

---

Rafala — *decentralized rails for compliant privacy.*

