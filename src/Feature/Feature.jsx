/* eslint-disable react/prop-types */
import styles from "./Feature.module.css" 

import featureImage from "../assets/sample-pic.jpg"

function Feature(){
    return(
        <>
        
            <div className={styles.feature}>
                    <div className={styles.featureTexts}>
                        <h3><b>Quality</b></h3>
                        <h1>Discover Our Top Services and Products</h1>
                        <h3>At our small business, we offer a range of high-quality services and products to meet your needs. From innovative solutions to exceptional customer service, we strive to exceed your expectations.</h3>
                    </div>
                    <div className={styles.featureMain}> 
                        <FeatureBox img={featureImage} featureTitle="Service Excellence" featurePara="Our team of experts is dedicated to providing exceptional service and ensuring your satisfaction."/>
                        <FeatureBox img={featureImage} featureTitle="Product Innovation" featurePara="We continuously strive to develop innovative products that meet the evolving needs of our customers."/>
                        <FeatureBox img={featureImage} featureTitle="Customer Satisfaction" featurePara="Your satisfaction is our top priority, and we go above and beyond to ensure you are happy with our services."/>
                    </div>
            </div>  
        
        </>
    );
}

function FeatureBox(props){
    return (
        <>
            <div className={styles.featureBox}>
                <img src="https://via.placeholder.com/160x90" className={styles.featureImg}/>
                <p className={styles.featureTitle}> {props.featureTitle} </p>
                <p className={styles.featurePara}> {props.featurePara}</p>
            </div>
        </>            
    );
}

export default Feature;
