A new era in research management — page bundle
================================================

Files
-----
index.html   The page. Publish it at the URL you already use:
             /resource/empowering-ri-a-new-era-in-research-management/
styles.css   All styles — the shared header/footer/nav/button styles from
             your existing factsheet page, plus the new components added
             for this page (kept in a clearly separated block at the end
             of the file).
script.js    All interactivity (nav, search toggle, video overlay, the
             two-column "What/Who" phase switch, the outcomes tabs, and
             the rendered "difference" and "further material" lists).
research-management-factsheet.pdf
             The source factsheet, used by both "Download full PDF"
             buttons (the <a download> attribute triggers a real
             download, it doesn't just open the PDF in a new tab).
research-management-explainer.mp4
             Your explainer video (1920×1080, ~50s, h264/aac), placed
             in the hero exactly where it was reserved. It's a 16:9
             video in a 16:9 frame, so it fills the frame with no
             letterboxing or cropping.
video-poster.jpg
             A frame grabbed from the video itself (the title card, at
             the 0.5s mark) used as the poster shown before playback —
             so visitors see a clean, on-brand still instead of a
             blank/black box while the video loads.

Swapping the video later
-------------------------
If you ever replace the video file, just keep the filename
"research-management-explainer.mp4" (or update the <source src="…">
in index.html) and re-export a poster frame, or ask us to regenerate
video-poster.jpg from the new file. No other changes are needed — the
play-button overlay and video controls already work.

What's interactive
-------------------
- "Where research management can make the difference" — a 9-item grid
  with a hover highlight.
- "How does the topic contribute to the ERA?" — a 2022–2024 / 2025–2027
  toggle that swaps the year-specific entries in the What/Who columns.
- "What has been accomplished — and what comes next?" — tabs switching
  between the 2022–2024 and 2025–2027 outcome lists.
- "Further material" — a linked list opening the ERA Policy Platform,
  INSPIRING ERA and the two ERA Policy Agendas in a new tab.

Design notes
------------
Colours, type (Space Grotesk + Inter), header, footer, buttons and the
tab/accordion interaction pattern are all taken directly from the
factsheet page you shared, so this page matches it stylistically.
Content and structure come from the "A new era in research management"
factsheet (European Commission, February 2026); wording has been
tightened for the web but every substantive point from the PDF is kept.
All section blocks share the same heading style, content width and
vertical rhythm as the rest of the site for a consistent look.
