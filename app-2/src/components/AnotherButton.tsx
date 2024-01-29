import { useState } from "react";

const AnotherButton = () => {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <button type="button" onClick={() => setHasClicked(hasClicked => !hasClicked)}>
      {hasClicked ? 'On' : 'Off'}
    </button>
  );
}

export default AnotherButton;