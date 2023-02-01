import os

from homeassistant_api import Client

api_url = "http://192.168.1.87:8123/api"
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MWJjOTJiZmEzODM0NDNjYmFkNGI2ZjhiNmVlZThiMiIsImlhdCI6MTY3NDA2NDE2MSwiZXhwIjoxOTg5NDI0MTYxfQ.pX8FC2S14BdijbO5WDBbmb0Eh3ltIsfVqHYwT0fYO_c"

assert token is not None

with Client(
    api_url,
    token,
) as client:
    switch = client.get_domain("switch")
    switch.toggle(entity_id="switch.sonoff_100068d4f9")
