import json
import boto3
from boto3.dynamodb.conditions import Key
import uuid

def get_deets(event, context):
	# Instanciating connection objects with DynamoDB using boto3 dependency
    dynamodb = boto3.resource('dynamodb')
    client = boto3.client('dynamodb')

    # get variable of deets table
    deets_table = dynamodb.Table('deets')

    deet_id = event['pathParameters']['id']

    try:
        results = deets_table.query(
	        KeyConditionExpression=Key('id').eq(deet_id)
	    )
        
        if len(results['Items']) == 0:
        	return {
	            'statusCode': 404,
	            'body': json.dumps("deets not found")
        	}	

        return {
            'statusCode': 200,
            'headers': {
		      'Access-Control-Allow-Origin': 'https://deets.tapme.org',
		      'Access-Control-Allow-Credentials': 'true',
		    },
            'body': json.dumps(results['Items'][0]) # only return the first match for uuid
        }
    except Exception as e:
        print(f"Failed retrieving deets: {e}")
        return {
                'statusCode': 400,
                'body': json.dumps('Error retrieving deets')
        }

def create_deets(event, context):
	# Instanciating connection objects with DynamoDB using boto3 dependency
    dynamodb = boto3.resource('dynamodb')
    client = boto3.client('dynamodb')

    # get variable of deets table
    deets_table = dynamodb.Table('deets')

    # generate a uuid
    deet_id = str(uuid.uuid4())

    deet_link = deet_id # TODO Replace this with full URL
    item = event['body']
    # Putting a try/catch to log to user when some error occurs
    try:
        # print(f"Adding deets: {event}")
        item['id'] = deet_id
        deets_table.put_item(Item=item)
        
        return {
        	'headers': {
		      'Access-Control-Allow-Origin': 'https://deets.tapme.org',
		      'Access-Control-Allow-Credentials': 'true',
		    },
            'statusCode': 200,
            'body': json.dumps(
            	{
		        	"deet-link": deet_link
		    	}
		    )
        }
    except Exception as e:
        print(f"Failed creating deets: {e}")
        return {
                'statusCode': 400,
                'body': json.dumps('Error creating deets')
        }

