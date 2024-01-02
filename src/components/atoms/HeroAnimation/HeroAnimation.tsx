import Lottie from "lottie-react";
import animationData from "./animationData.json";

function HeroAnimation() {
  return (
    <>
      <Lottie
        data-testid='HeroAnimationLottie'
        loop={false}
        autoPlay={true}
        animationData={animationData}
      />
    </>
  );
}

export default HeroAnimation;
