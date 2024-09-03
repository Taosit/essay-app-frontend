import { useState } from "react";
import { Essay } from "./Essay";
import { Essay as EssayType } from "../types";

type Props = {
  essay: EssayType;
};

export const EssayWithToggles = ({ essay }: Props) => {
  const [correctionLevel, setCorrectionLevel] = useState("original");
  return (
    <div>
      <div>
        <label htmlFor="original">Original</label>
        <input
          type="radio"
          name="correction-level"
          id="original"
          value="original"
          checked={correctionLevel === "original"}
          onChange={() => setCorrectionLevel("original")}
        />
        <label htmlFor="wrong-text">Wrong text</label>
        <input
          type="radio"
          name="correction-level"
          id="wrong-text"
          value="wrong-text"
          checked={correctionLevel === "wrong-text"}
          onChange={() => setCorrectionLevel("wrong-text")}
        />
        <label htmlFor="full">Full</label>
        <input
          type="radio"
          name="correction-level"
          id="full"
          value="full"
          checked={correctionLevel === "full"}
          onChange={() => setCorrectionLevel("full")}
        />
      </div>
      <Essay
        essay={essay}
        showWrongText={correctionLevel === "wrong-text"}
        showCorrectedEssay={correctionLevel === "full"}
      />
    </div>
  );
};
