import React from "react";

const CreatedImage = () => {
  return (
    <div className="container inline-block w-1/4 h-1/3 relative bg-lightgray rounded-full">
      {/* Put BASE here - so it will appear above CUP but below TOPPING */}
      <img
        className="absolute"
        src="https://drive.google.com/uc?export=view&id=1KULwHaygOZFVPkRnzVkYj4zItod4AZhn"
        alt="milk tea"
      />
      {/* Put TOPPING here - so it will appear above BASE */}
      <img
        className="absolute"
        src="https://drive.google.com/uc?export=view&id=1pgEENjWjQldeA95EyXCXcemZeaNKbMs2"
        alt="grass jelly"
      />
      {/* Put CUP here - so it will appear below BASE and TOPPING */}
      <img
        src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
        alt="cup"
      />
    </div>
  );
};

export default CreatedImage;
