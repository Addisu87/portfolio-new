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
		<Wrap>
			<Title title={'About'} />
			<ContentAbout />
			<Title title={'Skills'} />
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
		</Wrap>
	);
}

export default About;

const Wrap = styled.div`
	padding: 20px 12px;
	overflow: hidden;
	background: #f5f8fd;
	p {
		padding: 8px;
	}
`;

const SkillsContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 2rem;
	row-gap: 1.2rem;
	margin: 1rem 0;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 0;
	}
`;
