import './JobInfo.css'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiSass } from "react-icons/di"

export default function JobInfo({ jobInfo }) {

    const jobInfoDescription = () => {
        switch (jobInfo) {
            case 'Page Game':
                return <p className="job-info-text"><span><DiHtml5/> <DiCss3/> <DiJsBadge/><br/><br/></span>Página de portfólio pessoal simulando um jogo 2d.<br/><br/>Responsivo: Não</p>
            case 'ToDo':
                return <p className="job-info-text"><span><DiHtml5/> <DiCss3/> <DiJsBadge/></span><br/><br/>Página To Do List para praticar conhecimentos de front end.<br/><br/>Responsivo: Sim</p>
            case 'Pizzaria':
                return <p className="job-info-text"><span><DiHtml5/> <DiSass/> <DiReact/></span><br/><br/>Landing Page de uma pizzaria para praticar conhecimentos de front end.<br/><br/>Responsivo: Sim</p>
            case 'Budget':
                return <p className="job-info-text"><span><DiHtml5/> <DiCss3/> <DiReact/></span><br/><br/>Página de orçamento feita no curso de React com adições pessoais.<br/><br/>Responsivo: Sim</p>
            case 'Videoteca':
                return <p className="job-info-text"><span><DiHtml5/> <DiCss3/> <DiReact/></span><br/><br/>Página de filmes feita em React/Vite utilizando api do TMDB.<br/><br/>Responsivo: Sim</p>
            case 'Em Breve':
                return <p className="job-info-text"><br/><br/><br/><br/><br/>Tem uma ideia? Vamos fazer juntos!</p>
            
            default:
                return "";
        }
    }

    return (
        <>
            {jobInfoDescription()}
        </>
    )
}
