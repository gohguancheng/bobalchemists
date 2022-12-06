import React from "react";

// Got Card component from https://kimia-ui.vercel.app/components/card

const style = {
  card: `relative md:min-h-[300px] md:h-[300px] flex flex-col border-[1px] border-gray-200 rounded-[15px] bg-white shadow-sm hover:shadow-xl`,
  cardBody: `flex-1 text-center m-[20px]`,
  cardTitle: `font-medium text-gray-700`,
  cardText: `text-gray-500`,
};



function Card({ children }) {
  return (
    <div className={style.card}>
      {children}
    </div>
  );
}

function CardBody({ children }) {
  return <div className={style.cardBody}>{children}</div>;
}

function CardTitle({ children }) {
  return <div className={style.cardTitle}>{children}</div>;
}

const AvailableIngredients = ({
  ingredientsList,
  category,
  chosenIngredients,
  setChosenIngredients,
}) => {
  const handleCardClick = (event, name, id, img) => {
    //for Bases and Flavourings
    if (category !== "Toppings") {
      if (!chosenIngredients[category]) {
        const added = { [category]: { name: name, id: id, img: img } };
        setChosenIngredients((prev) => {
          return { ...prev, ...added };
        });
      } else if (chosenIngredients[category]) {
        const remove = { [category]: null };
        setChosenIngredients((prev) => {
          return { ...prev, ...remove };
        });
      }
      //for Toppings
    } else {
      if (!chosenIngredients[category]) {
        const added = { [category]: { name: name, id: id, img: img } };
        setChosenIngredients((prev) => {
          return { ...prev, ...added };
        });
      } else {
        const index = chosenIngredients[category].findIndex(
          (item) => item.id === id
        );
        if (index === -1) {
          const newArr = [
            ...chosenIngredients[category],
            { name: name, id: id, img: img },
          ];
          const added = { [category]: newArr };
          setChosenIngredients((prev) => {
            return { ...prev, ...added };
          });
        } else {
          const newArr = chosenIngredients[category].filter(
            (item) => item.id !== id
          );
          const remove = { [category]: newArr };
          setChosenIngredients((prev) => {
            return { ...prev, ...remove };
          });
        }
      }
      
    }
  };

  return (
    <div className="flex-1 h-full overflow-y-auto text-center justify-around py-[10px]">
      <h1 className="font-bold">Click below to select</h1>
      <h1 className="font-bold">{category}</h1>
      <div className="flex flex-wrap">
        {ingredientsList[category]
          ? ingredientsList[category].map((element, id) => {
              return (
                <div
                  className="w-40 m-2 button"
                  key={id}
                  onClick={(evt) =>
                    handleCardClick(evt, element.name, element._id, element.img)
                  }
                >
                  <Card>
                    <img
                      className="max-w-full h-auto md:h-[200px]"
                      src={element.img}
                      alt="ingredient"
                    />
                    <CardBody>
                      <CardTitle className="text-lg">{element.name}</CardTitle>
                    </CardBody>
                  </Card>
                </div>
              );
            })
          : 
          <div className="flex items-center justify-center">
            <h2 className="text-center text-2xl"> Loading.. </h2>
          </div> }
      </div>
    </div>
  );
};

export default AvailableIngredients;
