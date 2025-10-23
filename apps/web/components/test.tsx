import { Button } from "@workspace/ui/components/button";
import React from "react";

const Test = () => {
  return (
    <div className="container">
      <div className="bg-gray-100 p-4">
        <h1>Test title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem,
          cum laborum dicta vero saepe maxime harum nisi enim, quisquam natus
          voluptatum minus incidunt dolor suscipit distinctio perspiciatis
          possimus! Eveniet delectus magni corporis. Facere nihil a at mollitia
          aut natus, deserunt laborum similique expedita quia iusto dolorem
          placeat quos commodi et, molestiae sint tempore voluptatibus labore
          unde asperiores eius numquam. Consequuntur, praesentium libero ad
          quibusdam aut quam, nostrum asperiores porro explicabo culpa repellat.
          Possimus similique illo neque dicta reiciendis asperiores eveniet
          tempore quam, id repellendus fugiat in enim quaerat consequuntur
          corrupti quasi exercitationem at suscipit aperiam non. Laboriosam,
          praesentium sequi?
        </p>
        <Button size="sm" variant={"destructive"}>
          Button from test
        </Button>
      </div>
    </div>
  );
};

export default Test;
