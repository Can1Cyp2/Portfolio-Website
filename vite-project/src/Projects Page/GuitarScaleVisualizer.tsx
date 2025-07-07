import React, { useState } from "react";
import "./GuitarScaleVisualizer.css";

const tunings: { [key: string]: string[] } = {
  Standard: ["E", "A", "D", "G", "B", "E"],
  DropD: ["D", "A", "D", "G", "B", "E"],
  OpenG: ["D", "G", "D", "G", "B", "D"],
  DADGAD: ["D", "A", "D", "G", "A", "D"],
};

const scales: { [key: string]: number[] } = {
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 8, 10],
  Pentatonic: [0, 3, 5, 7, 10],
  Blues: [0, 3, 5, 6, 7, 10],
};

const noteToNumber: { [key: string]: number } = {
  C: 0,
  "C#": 1,
  D: 2,
  "D#": 3,
  E: 4,
  F: 5,
  "F#": 6,
  G: 7,
  "G#": 8,
  A: 9,
  "A#": 10,
  B: 11,
};

const numberToNote = Object.fromEntries(
  Object.entries(noteToNumber).map(([note, number]) => [number, note])
);

const GuitarScaleVisualizer: React.FC = () => {
  const [selectedTuning, setSelectedTuning] = useState("Standard");
  const [selectedScale, setSelectedScale] = useState("Major");
  const [rootNote, setRootNote] = useState("E");

  const rootNoteNumber = noteToNumber[rootNote];

  const generateFretboard = () => {
    return tunings[selectedTuning].map((openString, stringIndex) => (
      <div key={stringIndex} className="string">
        {Array.from({ length: 12 }).map((_, fretIndex) => {
          const noteNumber = (noteToNumber[openString] + fretIndex) % 12;
          const note = numberToNote[noteNumber];

          const isInScale = scales[selectedScale].includes(
            (noteNumber - rootNoteNumber + 12) % 12
          );

          return (
            <div
              key={fretIndex}
              className={`fret ${isInScale ? "active" : ""}`}
            >
              {isInScale ? <span className="note">{note}</span> : null}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="guitar-visualizer-container">
      {/* Left Side: Controls and Guitar Fretboard */}
      <div className="guitar-visualizer-left">
        {/* Selection Controls */}
        <div className="controls">
          <label>
            Select Tuning:
            <select
              value={selectedTuning}
              onChange={(e) => setSelectedTuning(e.target.value)}
            >
              {Object.keys(tunings).map((tuning) => (
                <option key={tuning} value={tuning}>
                  {tuning}
                </option>
              ))}
            </select>
          </label>

          <label>
            Root Note:
            <select
              value={rootNote}
              onChange={(e) => setRootNote(e.target.value)}
            >
              {Object.keys(noteToNumber).map((note) => (
                <option key={note} value={note}>
                  {note}
                </option>
              ))}
            </select>
          </label>

          <label>
            Select Scale:
            <select
              value={selectedScale}
              onChange={(e) => setSelectedScale(e.target.value)}
            >
              {Object.keys(scales).map((scale) => (
                <option key={scale} value={scale}>
                  {scale}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Guitar Fretboard */}
        <div className="guitar-visualizer-neck">{generateFretboard()}</div>
      </div>

      <div className="guitar-visualizer-content">
        <a
          href="https://github.com/your-username/your-guitar-visualizer-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="guitar-visualizer-title-link"
        >
        <h1>Guitar Visualizer</h1>
        </a>
        <p>
          This is an interactive web tool designed for musicians, guitarists,
          and learners who want to explore different scales and tunings
          dynamically on a virtual guitar fretboard.
        </p>
        <p>
          Users can select from a variety of tunings, root notes, and musical
          scales to see how the notes align across the neck of the guitar. This
          tool is a great way to understand scale patterns, improvisation, and
          alternate tunings.
        </p>
      </div>
    </div>
  );
};

export default GuitarScaleVisualizer;
