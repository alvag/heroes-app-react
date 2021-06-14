import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import PrivateRoute from '../../routers/PrivateRoute';

describe( 'Pruebas en <PrivateRoute />', function() {

    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test( 'debe mostrar el componente si está autenticado y guardar localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find( 'span' ).exists() ).toBe( true );

        expect( localStorage.setItem ).toHaveBeenLastCalledWith( 'lastPath', '/marvel' );

    } );

} );
