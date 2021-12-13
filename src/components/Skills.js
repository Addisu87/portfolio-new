import React from 'react';
import styled from 'styled-components';

function Skills({ skill, icon, progress, width }) {
	return (
		<SkillsContents>
			<div className="skillsContainer">
				<h5 className="skill-title">{skill}</h5>
				<i>{icon}</i>
				<div className="skill-bar">
					<p className="skill-text">{progress}</p>
					<div className="skill-progress">
						<div className="progress">
							<div
								className="inner-progress"
								style={{ width: width }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</SkillsContents>
	);
}

export default Skills;

const SkillsContents = styled.div`
	.skillsContainer {
		.skill-title {
			font-size: 1.3rem;
			font-weight: 100;
		}
		.skill-bar {
			display: flex;
			align-items: center;
			.skill-text {
				font-size: 1.2rem;
			}
			.skill-progress {
				width: 100%;
				.progress{
					width: 100%;
					height: 0.5rem;
					position: relative;
					margin-left: 1rem;
					background-color: #149ddd;
					.inner-progress {
						position: absolute;
						background-color: #037fff;
						height: 100%;
						bottom: 0;
						left: 0;
						transition: all 0.4s ease-in-out;
					}
				}
			}
		}
	}
	}
`;
