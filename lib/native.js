/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the mode of a Poisson distribution.
*
* @private
* @param {NonNegativeNumber} lambda - mean parameter
* @returns {NonNegativeInteger} mode
*
* @example
* var v = mode( 9.0 );
* // returns 9
*
* @example
* var v = mode( 1.0 );
* // returns 1
*
* @example
* var v = mode( -0.2 );
* // returns NaN
*
* @example
* var v = mode( NaN );
* // returns NaN
*/
function mode( lambda ) {
	return addon( lambda );
}


// EXPORTS //

module.exports = mode;
