import React from "react";

// Got Card component from https://kimia-ui.vercel.app/components/card

const style = {
  card: `relative min-h-[250px] h-[250px] flex flex-col border-gray-200 rounded-[20px] bg-white shadow-sm hover:shadow-md`,
  cardBody: `flex-1 text-center mx-[10px]`,
  cardTitle: `font-medium text-gray-700`,
  cardText: `text-gray-500`,
};

function Card({ children }) {
  return <div className={style.card}>{children}</div>;
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
    <div className="w-full h-full lg:overflow-y-auto text-center py-[20px]">
      <h1 className="font-bold">Click below to select</h1>
      <h1 className="font-bold">{category}</h1>
      <div className="flex flex-wrap justify-center gap-[10px]">
        {ingredientsList[category] ? (
          ingredientsList[category].map((element, id) => {
            return (
              <div
                className="w-40 button"
                key={id}
                onClick={(evt) =>
                  handleCardClick(evt, element.name, element._id, element.img)
                }
              >
                <Card>
                  <div className="relative inset-0 z-10">
                    <img
                      className="w-full max-w-full h-[150px]"
                      src={element.img}
                      alt="ingredient"
                    />
                    <CardBody>
                      <CardTitle className="text-lg">{element.name}</CardTitle>
                    </CardBody>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-[20px] ${
                      (!!chosenIngredients[category] &&
                        element._id === chosenIngredients[category].id) ||
                      (Array.isArray(chosenIngredients[category]) &&
                        chosenIngredients[category]
                          .map(({ id }) => id)
                          .includes(element._id))
                        ? "bg-cyan-100"
                        : ""
                    }`}
                  />
                </Card>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <h2 className="text-center text-2xl"> Loading.. </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableIngredients;
