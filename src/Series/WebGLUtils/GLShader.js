/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {GLenum} type 
 * @param {string} source 
 * @returns {WebGLShader}
 */
export function createShader (gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
    return shader;
    }

    console.log(gl.getShaderInfoLog(shader));  // eslint-disable-line
    gl.deleteShader(shader);
    return undefined;
}