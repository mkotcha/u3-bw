import React, { useState } from "react";

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = ["Italiano", "Inglese", "Spagnolo", "Francese", "Tedesco"];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleChange}>
        <option value="">Seleziona una lingua</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      {selectedLanguage && <p>Lingua selezionata: {selectedLanguage}</p>}
    </div>
  );
}

export default LanguageDropdown;
