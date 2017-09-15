/*
 * WebSocket event srouce
 * @param {SFKey} the key of socket
 * @param {String} url
 * @return {dispatcher | void}
 */

'use strict';

export default function ( SFKey, url ) {
    const { emit, socket } = this;

    if ( !url ) {
        url = SFKey;
    }

    if ( url ) {
        const _socket = new WebSocket( url );

        socket.ws.push({
            key: SFKey,
            url,
            socket,
        })

        const dispatcher = { };

        dispatcher.socket = _socket;

        dispatcher.emit = ( key, data ) => {
            const handler = ( result ) => {
                if ( data ) {
                    emit.bind( this )( key, { result, data, } );
                }
                else {
                    emit.bind( this )( key, result );
                }
            }

            _socket.addEventListener('message', ( res ) => {
                if ( res.data ) {
                    try {
                        handler( JSON.parse( res.data ) );
                    } catch ( e ) {
                        handler( res.data );
                    }
                }
                else {
                    handler( res );
                }
            })

            return dispatcher;
        }

        return dispatcher;
    }
};
