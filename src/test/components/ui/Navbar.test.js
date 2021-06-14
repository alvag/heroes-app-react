import { mount } from 'enzyme';
import { Navbar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe( 'Pruebas en <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Max'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    test( 'Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'Max' );
    } );

    test( 'Debe de llamar el logout y usar el history', () => {
        wrapper.find( 'button' ).prop( 'onClick' )();

        expect( contextValue.dispatch ).toHaveBeenLastCalledWith( {
            type: types.logout
        } );

        expect( historyMock.replace ).toHaveBeenLastCalledWith( '/login' );
    } );
} );
