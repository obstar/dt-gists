Feature: GetGist

  Scenario: GetGist - Successful request
    Given I create a gist
    When I perform get request for gists endpoint
    Then the response status code is 'OK'
  # And the gists get response body is correct

  Scenario: GetGist - Invalid gist id value return 404 Not Found
    Given I perform get request for gists endpoint with invalid gist id value
    Then the response status code is 'Not Found'
    And the response message is 'Not Found'
