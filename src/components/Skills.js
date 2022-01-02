import React from 'react';
import styled from 'styled-components';

function Skills({ skill, icon, progress, width }) {
	return (
		<SkillsContents>
			<div className="skillsContainer">
				<h5 className="skill-title">
					{skill} <i>{icon}</i>
				</h5>
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
		padding-left: 1rem;
		.skill-title {
			font-size: 1.2rem;
			font-weight: 100;
		}
		.skill-bar {
			display: flex;
			align-items: center;
			.skill-text {
				font-size: 1rem;
			}
			.skill-progress {
				width: 100%;
				.progress {
					width: 100%;
					height: 0.3rem;
					position: relative;
					margin: 0.3rem 0.5rem;
					background-color: #dff3fc;
					.inner-progress {
						position: absolute;
						background-color: #149ddd;
						height: 100%;
						bottom: 0;
						left: 0;
						transition: all 0.4s ease-in-out;
					}
				}
			}
		}
	}
`;
