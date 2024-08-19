import { useEffect, useState } from "react";
import { Food } from "../../models/food";
import api from "../../config/axios";
import { toast } from "react-toastify";
import Card from "../card";
import "./index.scss";

function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);

  const fetchFood = async () => {
    try {
      const response = await api.get("product");
      setFoods(response.data);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <div className="food-list">
      {foods.map((food) => (
        <Card food={food} />
      ))}
    </div>
  );
}

export default FoodList;
