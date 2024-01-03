import css from './Section.module.css';


const Section = ({ title, children }) =>
{
    return <section className={css.iteam}>
        <div className={css.title}>
            <h2>{title}</h2> 
            {children}
        </div>  
    </section>
}

export { Section };