# Hidden "Payment" Gag Page — Spec

## What it is
A hidden, unlisted page that mimics an Apple Pay style charge of **$10,000.00**
as a harmless prank. It is **not** linked anywhere in the site navigation and is
only reachable by typing the URL directly.

- **Route:** `#/payment` (e.g. `https://ameertayeh.me/#/payment`)
- **Source:** [`src/pages/surprise.jsx`](src/pages/surprise.jsx) + [`src/pages/surprise.css`](src/pages/surprise.css)
- **Wired up in:** [`src/App.jsx`](src/App.jsx) (route only — intentionally absent from the navbar)

## Behavior
1. On load, shows an Apple Pay style card: **"Apple Pay detected"**, a processing
   spinner, the merchant name, and the amount. This screen lingers ~3.8s.
2. The payment then "goes through": a green checkmark animates in, showing
   **"Done — $10,000.00 paid"**, accompanied by a short success chime.
3. It stays on the success screen.
4. A small **"No real transaction"** disclaimer is pinned to the bottom at all times.

### Sound
The chime is **synthesized at runtime** with the Web Audio API (two ascending
tones) — no audio file is shipped. The real Apple Pay sound is deliberately **not**
used because it is Apple's copyrighted asset. Because browsers block autoplay audio
without a user gesture, a fallback re-fires the chime on the visitor's first
click/tap/keypress.

## ⚠️ Legal / usage disclaimer
This page is a **visual gag only**. It is designed to be legal because:

- **No money ever moves.** There is no card input, no payment processor, and no
  charge of any kind. Nothing real happens — it is pure animation.
- **A disclaimer is always shown.** The persistent "No real transaction" line on
  the page documents intent: this is a joke, not a representation of a genuine charge.
- **No copyrighted audio is used.** The success sound is synthesized, not Apple's
  proprietary Apple Pay sound.

### Known grey area (low risk)
The page uses Apple's **name ("Apple Pay") and logo** for realism. This is a
*trademark* consideration (not fraud) and is low-risk for personal/parody use, but
it does imply no affiliation with or endorsement by Apple. To remove this entirely,
replace "Apple Pay" with a generic "Pay" label and swap the Apple logo for a generic
checkmark.

### Acceptable vs. unacceptable use
The code is legal; legality of **use** is on the operator:

- ✅ **Fine:** sharing as a prank with friends who will quickly realize it is fake.
- ❌ **Not fine:** using it to defraud, extort, or genuinely convince someone that a
  real $10,000 charge or transfer occurred. A disclaimer does not make deception for
  gain lawful.

## Editing notes
- **Change the amount / merchant:** `AMOUNT` and `MERCHANT` constants at the top of
  `src/pages/surprise.jsx`.
- **Change the processing delay:** the `setTimeout(..., 3800)` in the page's
  `useEffect`.
- **Change the URL path:** the `<Route path='/payment' ... />` line in `src/App.jsx`.
- **Disclaimer size/placement:** `.pay-disclaimer` in `src/pages/surprise.css`.
