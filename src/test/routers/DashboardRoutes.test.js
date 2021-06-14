import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';

describe( 'Prubas en <DashboardRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Max'
        }
    };

    test( 'Debe de mostrar correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>-
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'Max' );
    } );
} );
