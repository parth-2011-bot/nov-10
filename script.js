/* =========================================================
   THE BROMINE CHRONICLES — PERSONALISE THIS SECTION
   Edit the greeting, letter, sign-off and secrets below.
   Countdown uses India Standard Time (IST).
   ========================================================= */
const CONFIG = {
  recipient: "Very Evil Villain",
  letter: `HIIII Very Evil Villian!!

If you're reading this, congratulations: every evil villian you have broken 4th wall.

If you have no idea what a 4th wall is well idk google it. Anyways Very Evil Villian , pls Dont be Very Evil Villian and not give us a birthday party on your Birthday, since only 10 days left , SO yeaa , btw your eyes prettier than skyshot (idk what to write so i just wrote that)

Anyway, this is your official reminder that you're iconic. Please act accordingly.

More  nonsense is on its way. Stay tuned.`,
  signoff: "— Your favourite writer",
  everydaySecret: "IT SAID DO NOT PRESS IT , WHY DID YOU😡😡👺",
  birthdaySecret: "HAPPY BIRTHDAY, PALAK!!! You are loved, appreciated, and officially the star of this entire comic-book.",
  birthdayDate: "2026-11-20"
};

const $ = (id) => document.getElementById(id);
const pages = ["page-cover", "page-countdown", "page-letter"];

function showPage(id) {
  pages.forEach(pageId => $(pageId).classList.toggle("active", pageId === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$("startBtn").addEventListener("click", () => showPage("page-countdown"));
$("letterBtn").addEventListener("click", () => showPage("page-letter"));
$("backBtn").addEventListener("click", () => showPage("page-cover"));

$("letterBody").textContent = CONFIG.letter;
$("signoff").textContent = CONFIG.signoff;

function getBirthdayTarget() {
  // Explicit +05:30 offset keeps the target at midnight IST.
  return new Date(`${CONFIG.birthdayDate}T00:00:00+05:30`);
}
const birthdayStart = getBirthdayTarget();
const birthdayEnd = new Date(birthdayStart.getTime() + 24 * 60 * 60 * 1000);
let birthdayOverlayShown = false;

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, birthdayStart.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  $("days").textContent = String(days).padStart(2, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");

  const birthdayMode = now >= birthdayStart && now < birthdayEnd;
  if (birthdayMode) {
    $("countdownStatus").textContent = "THE DAY HAS ARRIVED. IT'S BIRTHDAY TIME!";
    if (!birthdayOverlayShown) {
      $("birthdayOverlay").hidden = false;
      birthdayOverlayShown = true;
      launchConfetti();
    }
  } else if (now >= birthdayEnd) {
    $("countdownStatus").textContent = "THE BIRTHDAY ISSUE HAS BEEN ARCHIVED. ★";
  } else {
    $("countdownStatus").textContent = "THE ANTICIPATION IS REAL.";
  }
  $("footerIssue").textContent = birthdayMode ? "ISSUE 10 · BIRTHDAY MODE!" : "ISSUE 10 · PRINTED WITH 100% DRAMA";
}
updateCountdown();
setInterval(updateCountdown, 1000);

function openSecret(message) {
  $("secretMessage").textContent = message;
  $("secretModal").hidden = false;
}
function closeSecret() { $("secretModal").hidden = true; }
$("secretBtn").addEventListener("click", () => openSecret(CONFIG.everydaySecret));
$("letterSecret").addEventListener("click", () => openSecret(CONFIG.everydaySecret));
$("closeModal").addEventListener("click", closeSecret);
$("modalOkay").addEventListener("click", closeSecret);
$("secretModal").addEventListener("click", (event) => {
  if (event.target === $("secretModal")) closeSecret();
});
$("birthdaySecret").addEventListener("click", () => {
  $("birthdayOverlay").hidden = true;
  openSecret(CONFIG.birthdaySecret);
});
$("closeBirthday").addEventListener("click", () => $("birthdayOverlay").hidden = true);

function launchConfetti() {
  const colors = ["#ffe34d", "#f04438", "#2776d2", "#fff8e7"];
  for (let i = 0; i < 85; i++) {
    const piece = document.createElement("i");
    piece.style.cssText = `
      position:fixed;z-index:70;top:-15px;left:${Math.random() * 100}vw;
      width:${6 + Math.random() * 7}px;height:${10 + Math.random() * 9}px;
      background:${colors[i % colors.length]};border:1px solid #171717;
      transform:rotate(${Math.random() * 180}deg);pointer-events:none;
      animation:confettiFall ${2.5 + Math.random() * 2.5}s linear forwards;
    `;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5200);
  }
}
const confettiStyle = document.createElement("style");
confettiStyle.textContent = "@keyframes confettiFall{to{transform:translateY(110vh) rotate(760deg);opacity:.85}}";
document.head.appendChild(confettiStyle);
