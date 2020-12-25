export var vertex = `

uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D t; 

float PI = 3.141592653589793238;

void main()	{
    vUv = uv;
    vPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.);
    gl_PointSize = 2.; 
    gl_Position = projectionMatrix * mvPosition;

}
`