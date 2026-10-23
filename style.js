
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #101820;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

header {
  background: linear-gradient(135deg, #10432f, #168451);
  padding: 22px 12px;
}

header h1 {
  margin: 0 0 8px;
  font-size: clamp(28px, 5vw, 42px);
}

header p {
  margin: 0;
}

main {
  width: min(100%, 1000px);
  margin: auto;
  padding: 15px;
}

.panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.panel span {
  background: #263541;
  padding: 12px;
  border-radius: 9px;
}

button {
  border: 0;
  border-radius: 9px;
  padding: 13px 18px;
  background: #20a464;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  filter: brightness(1.12);
}

.mesa {
  border: 8px solid #754323;
  border-radius: 14px;
  overflow: hidden;
  background: #075b38;
  box-shadow: 0 12px 30px #0008;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  touch-action: none;
}

.controls {
  display: grid;
  gap: 12px;
  max-width: 500px;
  margin: 24px auto;
}

input[type="range"] {
  width: 100%;
  accent-color: #20a464;
}

#shoot {
  background: #e8ad35;
  color: #182018;
  font-size: 19px;
  padding: 16px;
}

#message {
  color: #a9edc5;
  min-height: 22px;
}

.help {
  background: #202d38;
  padding: 18px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.6;
}

.help h2 {
  color: #62d69b;
}

footer {
  padding: 20px;
  color: #aebcc7;
}

@media (max-width: 500px) {
  main {
    padding: 9px;
  }

  .mesa {
    border-width: 5px;
    border-radius: 8px;
  }

  .panel {
    gap: 7px;
  }

  .panel span,
  .panel button {
    padding: 10px;
    font-size: 13px;
  }
}
