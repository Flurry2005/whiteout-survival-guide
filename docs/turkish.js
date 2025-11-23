const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzZcbe-46N5_xVlvJ744461xOg4Ktt-pVCFCFIcJt73gHHI14anYUYYAtykJCOW9_A4/exec";

    document.getElementById("turk").addEventListener("click", async () => {
      const paras = document.querySelectorAll("p");
      for (const p of paras) {
        const text = p.innerText.trim();
        if (!text) continue;
        const url = `${WEB_APP_URL}?text=${encodeURIComponent(text)}`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          p.innerText = data.translatedText;
        } catch(err) {
          console.error("Translation error:", err);
        }
      }
    });