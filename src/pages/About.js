import React from 'react';
import styled from 'styled-components';
import ContentAbout from '../components/ContentAbout';
import Title from '../components/Title';
import Skills from '../components/Skills';
import {
	FaCss3,
	FaHtml5,
	FaJsSquare,
	FaNodeJs,
	FaPython,
	FaReact
} from 'react-icons/fa';

function About() {
	return (
		<div className="AboutPage">
			<Title title={'About'} span={'About'} />
			<ContentAbout />
			<Title title={'Skills'} span={'Skills'} />
			<SkillsContainer>
				<Skills
					skill={'HTML'}
					icon={<FaHtml5 />}
					progress={'90%'}
					width={'60%'}
				/>
				<Skills
					skill={'CSS'}
					icon={<FaCss3 />}
					progress={'95%'}
					width={'95%'}
				/>
				<Skills
					skill={'JavaScript'}
					icon={<FaJsSquare />}
					progress={'75%'}
					width={'75%'}
				/>
				<Skills
					skill={'React.Js'}
					icon={<FaReact />}
					progress={'70%'}
					width={'70%'}
				/>
				<Skills
					skill={'Node.Js'}
					icon={<FaNodeJs />}
					progress={'80%'}
					width={'80%'}
				/>
				<Skills
					skill={'Python'}
					icon={<FaPython />}
					progress={'70%'}
					width={'70%'}
				/>
				<Skills skill={'LaTex'} progress={'90%'} width={'90%'} />
				<Skills skill={'Web Design'} progress={'75%'} width={'75%'} />
			</SkillsContainer>
		</div>
	);
}

export default About;

const SkillsContainer = styled.div`
	overflow: hidden;
	display: grid;
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 3rem;
	row-gap: 2rem;
	margin: 2rem 0;
`;
