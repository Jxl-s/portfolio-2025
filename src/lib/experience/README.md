# Experience

mainly a note to myself, to make high quality model through blender

1. Create the scene, with lighting and everything setup
2. Create a new texture in the UV editor, the size could be 2048x2048 or 4096x4096 (might get higher quality this way)
3. For each material in the scene, add an image texture node that links to the newly created texture.
4. Automatically unwrap UV's since it's faster, set a margin if necessary
4.1. Set the iterations to 256 (will be faster) and disable "denoising" since it'll be done at the end
5. Select all elements to bake from the scene, and go to the "Bake" section. 4px margin, tiling to 2048 or 4096 (not sure)
6. Start baking, might take a while
7. Composition tab, add the image texture as an input node, and add the denoising node as well. Set the output image to 2048x2048 or 4096x4096 depending on the size of the texture.
8. render, and export texture as jpg (image size is smaller)
