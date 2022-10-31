import React from 'react';

import { Header } from 'components/Header';
import { Main } from 'components/Main';

import * as S from 'styles/globalElements';

function App() {
  return (
		<>
			<Header />

			<S.Container>
				<Main />
			</S.Container>
		</>
  );
};

export default App;
