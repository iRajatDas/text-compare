import React from "react";

const Features = () => {
  return (
    <div className="bg-stone-50 py-12">
      <div className="py-12 px-4 space-y-4 bg-white border shadow-xl">
        <h2 className="font-bold tracking-tight text-2xl md:text-3xl">
          How to use the Text Compare
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore amet
          odio, quaerat maxime explicabo, expedita quibusdam qui officiis ipsam
          voluptatum atque nemo illo omnis ex aspernatur commodi. Sit laudantium
          assumenda, consequuntur eum necessitatibus, voluptatem est distinctio
          fuga.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-8">
          <div className="border-2 bg-gray-100 rounded-lg p-4 md:p-6 space-y-5 text-center">
            <h3 className="font-semibold tracking-tight text-xl md:text-2xl border-b-2 pb-4">
              Feature 1
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              deserunt iure fugiat illum culpa vitae sit eveniet, doloribus aut
              maxime.
            </p>
          </div>
          <div className="border-2 bg-gray-100 rounded-lg p-4 md:p-6 space-y-5 text-center">
            <h3 className="font-semibold tracking-tight text-xl md:text-2xl border-b-2 pb-4">
              Feature 2
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              deserunt iure fugiat illum culpa vitae sit eveniet, doloribus aut
              maxime.
            </p>
          </div>
          <div className="border-2 bg-gray-100 rounded-lg p-4 md:p-6 space-y-5 text-center">
            <h3 className="font-semibold tracking-tight text-xl md:text-2xl border-b-2 pb-4">
              Feature 3
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              deserunt iure fugiat illum culpa vitae sit eveniet, doloribus aut
              maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
