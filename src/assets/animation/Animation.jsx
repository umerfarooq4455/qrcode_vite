// Animation.js
import React from "react";
import Lottie from "react-lottie";
import AnimationModal from "./AnimationModal";
import animationData from "../../assets/Animation.json";
import { useApiContext } from "../../contextapi/contextApi";

const Animation = () => {
  const { animationVisible, setAnimationVisible } = useApiContext(); 

  const closeModal = () => {
    setAnimationVisible(false);
  };

  return (
    <>
      {animationVisible && (
        <AnimationModal
          onClose={closeModal}
        >
          <div style={{ width: "300px", height: "300px" }}>
            <Lottie options={{ loop: false, autoplay: true, animationData }} />
          </div>
        </AnimationModal>
      )}
    </>
  );
};

export default Animation;
