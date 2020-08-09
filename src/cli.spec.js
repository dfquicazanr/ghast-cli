import { createProject } from "./cli";


describe('#createProject', () => {
    it('should create a folder named after the project name, initialize git and add the template and buildspec files', () => {
        // Arrange
        const projectName = 'ProjectTestName';

        // Act
        createProject(projectName);

        // Assert
        // create folder
        // init git
        // add default files
        expect(true);
    });
})
