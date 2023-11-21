const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();

describe('API Users tests', () => {
  const baseURL = 'https://fakerestapi.azurewebsites.net/api/v1';
  const usersEndpoint = '/Users';
  let createdUserId;

  const userSchema = {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      userName: { type: 'string', nullable: true },
      password: { type: 'string', nullable: true }
    },
    required: ['id'],
    additionalProperties: false
  };

  describe('valid cases', () => {
    let response;
    beforeAll(async () => {
      response = await axios.get(`${baseURL}${usersEndpoint}`);
    });

    test('should return status code 200', () => {
      expect(response.status).toBe(200);
    });

    test('should have a valid response body', () => {
      const result = validate.validate(response.data, userSchema);
      expect(result.valid).toBe(true);
    });
  });

  describe('POST create user', () => {
    let response;
    beforeAll(async () => {
      const newUser = {
        userName: 'testUser',
        password: 'testPassword'
      };
      response = await axios.post(`${baseURL}${usersEndpoint}`, newUser);
      createdUserId = response.data.id;
    });

    test('should return status code 200', () => {
      expect(response.status).toBe(200);
    });

    test('should have a valid response body', () => {
      const result = validate.validate(response.data, userSchema);
      expect(result.valid).toBe(true);
    });
  });

  describe('GET single user', () => {
    let response;
    beforeAll(async () => {
      response = await axios.get(`${baseURL}${usersEndpoint}/${createdUserId}`);
    });

    test('should return status code 200', () => {
      expect(response.status).toBe(200);
    });

    test('should have a valid response body', () => {
      const result = validate.validate(response.data, userSchema);
      expect(result.valid).toBe(true);
    });
  });

  describe('PUT update user', () => {
    let response;
    beforeAll(async () => {
      const updatedUserData = {
        userName: 'updatedUser',
        password: 'updatedPassword'
      };
      response = await axios.put(`${baseURL}${usersEndpoint}/${createdUserId}`, updatedUserData);
    });

    test('should return status code 200', () => {
      expect(response.status).toBe(200);
    });

    test('should have a valid response body', () => {
      const result = validate.validate(response.data, userSchema);
      expect(result.valid).toBe(true);
    });
  });

  describe('DELETE user', () => {
    let response;
    beforeAll(async () => {
      response = await axios.delete(`${baseURL}${usersEndpoint}/${createdUserId}`);
    });

    test('should return status code 200', () => {
      expect(response.status).toBe(200);
    });
  });
});
