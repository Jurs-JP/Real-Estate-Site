/* eslint-disable react/prop-types */
import styles from "./Team.section.module.css"
import doggo from "../assets/doggo.jpg"

function TeamSection(){
    return (
        <>
            <section className={styles.TeamSection}>
                <div className={styles.TeamSectionTexts}>
                    <p>Experienced</p>
                    <h2>Meet Our Team</h2>
                    <p>Get to know our real estate agents and their expertise.</p>
                </div>
                <div className={styles.TeamSectionMembersBox}>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                    <TeamMember img={doggo} name="John Jur" title="Real Estate Agent" quote="John is a dedicated real estate agent with years of experience in the industry."/>
                </div>
                
            </section>
        </>
    );
}

function TeamMember(props){
    return (
        <>
        
            <div className={styles.TeamMemberBox}>
                <img className={styles.TeamMemberImg} src={props.img}/>
                <p className={styles.TeamMemberName}>{props.name}</p>
                <p className={styles.TeamMemberTitle}>{props.title}</p>
                <p className={styles.TeamMemberQuote}>{props.quote}</p>
                
            </div>
        
        </>
    );
}

export default TeamSection;