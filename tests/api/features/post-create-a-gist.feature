Feature: PostCreateGist

  Scenario: PostCreateGist - Successful request
    Given payload is prepared for post gists request
    When I perform post request for gists endpoint
    Then the response status code is 'Created'
#    And the gists post response body is correct

  Scenario: PostCreateGist - Invalid description value return 422 Unprocessable Entity
    Given payload is with invalid description value for post gists request
    When I perform post request for gists endpoint
    Then the response status code is 'Unprocessable Entity'
