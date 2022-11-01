import React from 'react';

import { Header, Main } from 'components';

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
