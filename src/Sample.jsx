import React from 'react';
import { motion } from 'framer-motion';
import ScrambledText from './components/Scrambledtext';
import Ribbons from './components/Ribbons';
import TiltedCard from './components/TiltedCard';

function Sample() {
  return (
    <>
      {/* Decorative Ribbons */}
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
        <Ribbons
          baseThickness={30}
          colors={['#0000FF']} // blue color
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>

      {/* Main Content Section */}
      <motion.div
        className="min-h-screen bg-black text-white p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Scrambled Text */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-white text-lg mb-8"
        >
          <ScrambledText
            className="text-xl tracking-wide leading-relaxed"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars="abcdefghijklmnopqrstuvwxyz"
          >
            I'm a B.Tech CSE student driven by curiosity and creativity. I love diving deep into frontend animations, constantly exploring how motion and interaction enhance user experience. I'm also passionate about contributing to open-source projects, where I can learn, collaborate, and give back to the community.
          </ScrambledText>
        </motion.div>

        {/* Tilted Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="my-10"
        >
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          
        </motion.div>
         {/* Tilted Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="my-10"
        >
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          
        </motion.div>
         {/* Tilted Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="my-10"
        >
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          <TiltedCard
            imageSrc="https://i.postimg.cc/vZbZNNds/Chat-GPT-Image-Jul-11-2025-11-29-30-AM.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="KL University"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={18}
            scaleOnHover={1.5}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Konneru Lakshamaiah Deemed to be University-vaddeshwaram
              </p>
            }
          />
          
        </motion.div>

        {/* Duplicate Text Removed — Optional: Reuse if needed */}
      </motion.div>
    </>
  );
}

export default Sample;
