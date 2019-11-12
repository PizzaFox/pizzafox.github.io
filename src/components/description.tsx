import {faGithub, faKeybase} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Box} from 'grommet';
import React from 'react';
import BoxButton from './box-button';
import ResumeButton from './resume-button';

function Description(): JSX.Element {
	return (
		<>
			<Box direction='row-responsive' margin='large' gap='medium'>
				<BoxButton icon={faGithub} href='https://github.com/pizzafox'>
					pizzafox@github
				</BoxButton>
				<BoxButton icon={faEnvelope} href='mailto:jonah@jonah.pw'>
					jonah@jonah.pw
				</BoxButton>
				<BoxButton icon={faKeybase} href='https://keybase.io/pizzafox'>
					pizzafox@keybase
				</BoxButton>
			</Box>
			<Box direction='row-responsive' margin='large' gap='medium'>
				<ResumeButton />
			</Box>
		</>
	);
}

export default Description;
