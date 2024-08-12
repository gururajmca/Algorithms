console.log('JS Application execution time');
console.time('SLOW');
(() => {
  const res = [];
  for (var i = 0; i < 10; i++) {
    res[i] = i;
  }
})();


// forEach
[11,21,31].forEach((item, i) => {
  console.log(item, i);
});

// Map
const res = [1,2,3].map((item)=> {
  return item * 2;
})
console.log(res);

// Filter
const resFilter = [1,2,3,4,5].filter((val)=> {
  return val % 2 === 0;
})
console.log('Filter ', resFilter);

// Reducer
const resReducer = [1,2,3,4,5].reduce((acc, curr)=> {
  return acc + curr;
})
console.log('Reducer ', resReducer);



const result = [
    {
        "data": [
            {
                "app_name": "Amazon Web Services Console",
                "discovery_domains": [
                    "aws.amazon.com",
                    "api.amazon.com"
                ],
                "id": 152,
                "steering_domains": [
                    "aws.amazon.com",
                    "api.amazon.com",
                    "signin.aws.amazon.com",
                    "console.aws.amazon.com",
                    "us-gov-east-1.console.amazonaws-us-gov.com",
                    "us-gov-west-1.console.amazonaws-us-gov.com",
                    "us-gov-east-1.signin.amazonaws-us-gov.com",
                    "a.b.cdn.console.awsstatic.com"
                ]
            },
            {
                "app_name": "Amazon EC2",
                "discovery_domains": [
                    "ec2.amazonaws.com",
                    "ec2.us-west-1.amazonaws.com"
                ],
                "id": 4113,
                "steering_domains": [
                    "ec2.amazonaws.com",
                    "ec2.us-west-1.amazonaws.com",
                    "ec2.ap-south-1.amazonaws.com",
                    "ec2.us-east-1.amazonaws.com",
                    "ec2.ap-northeast-2.amazonaws.com",
                    "ec2.eu-west-3.amazonaws.com",
                    "ec2.ap-southeast-2.amazonaws.com",
                    "ec2.eu-central-1.amazonaws.com",
                    "ec2.eu-west-2.amazonaws.com",
                    "ec2.ca-central-1.amazonaws.com",
                    "ec2.us-west-2.amazonaws.com",
                    "ec2.eu-west-1.amazonaws.com",
                    "ec2.sa-east-1.amazonaws.com",
                    "ec2.ap-northeast-3.amazonaws.com",
                    "ec2.ap-northeast-1.amazonaws.com",
                    "ec2.us-east-2.amazonaws.com",
                    "ec2.cn-northwest-1.amazonaws.com.cn",
                    "ec2.cn-north-1.amazonaws.com.cn",
                    "ec2.ap-southeast-1.amazonaws.com",
                    "ec2-instance-connect.af-south-1.amazonaws.com",
                    "ec2-instance-connect.eu-south-1.amazonaws.com",
                    "ec2-instance-connect.eu-west-1.amazonaws.com",
                    "ec2-instance-connect.eu-west-3.amazonaws.com",
                    "ec2-instance-connect.sa-east-1.amazonaws.com",
                    "ec2-instance-connect.ap-northeast-1.amazonaws.com",
                    "ec2-instance-connect.eu-north-1.amazonaws.com",
                    "ec2-instance-connect.ap-northeast-3.amazonaws.com",
                    "ec2-instance-connect.cn-north-1.amazonaws.com.cn",
                    "ec2-instance-connect.ap-south-1.amazonaws.com",
                    "ec2-instance-connect.us-gov-west-1.amazonaws.com",
                    "ec2-instance-connect.ap-northeast-2.amazonaws.com",
                    "ec2-instance-connect.eu-west-2.amazonaws.com",
                    "ec2-instance-connect.me-south-1.amazonaws.com",
                    "ec2-instance-connect.us-east-2.amazonaws.com",
                    "ec2-instance-connect.us-west-1.amazonaws.com",
                    "ec2-instance-connect.us-gov-east-1.amazonaws.com",
                    "ec2-instance-connect.us-west-2.amazonaws.com",
                    "ec2-instance-connect.ca-central-1.amazonaws.com",
                    "ec2-instance-connect.eu-central-1.amazonaws.com",
                    "ec2-instance-connect.us-east-1.amazonaws.com",
                    "ec2-instance-connect.ap-east-1.amazonaws.com",
                    "ec2-instance-connect.cn-northwest-1.amazonaws.com.cn",
                    "ec2-instance-connect.ap-southeast-1.amazonaws.com",
                    "ec2-instance-connect.ap-southeast-2.amazonaws.com",
                    "ec2.me-south-1.amazonaws.com",
                    "ec2.us-gov-east-1.amazonaws.com",
                    "ec2.eu-south-1.amazonaws.com",
                    "ec2.ap-east-1.amazonaws.com",
                    "ec2.af-south-1.amazonaws.com",
                    "ec2.us-gov-west-1.amazonaws.com",
                    "ec2.eu-north-1.amazonaws.com",
                    "ec2.ap-south-2.amazonaws.com",
                    "ec2.ap-southeast-3.amazonaws.com",
                    "ec2.eu-south-2.amazonaws.com",
                    "ec2.eu-central-2.amazonaws.com",
                    "ec2.me-central-1.amazonaws.com",
                    "ec2.ap-southeast-4.amazonaws.com"
                ]
            }
        ],
        "status": "Success",
        "status_code": 200
    },
    {
        "data": [
            {
                "app_name": "Amazon WorkMail",
                "discovery_domains": [
                    "workmail.ap-east-1.amazonaws.com",
                    "workmail.eu-north-1.amazonaws.com"
                ],
                "id": 9185,
                "steering_domains": [
                    "workmail.ap-east-1.amazonaws.com",
                    "workmail.eu-north-1.amazonaws.com",
                    "workmail.eu-west-3.amazonaws.com",
                    "workmail.eu-central-1.amazonaws.com",
                    "workmail.ap-southeast-1.amazonaws.com",
                    "workmail.ap-northeast-1.amazonaws.com",
                    "workmail.cn-northwest-1.amazonaws.com.cn",
                    "workmail.eu-south-1.amazonaws.com",
                    "workmail.us-east-1.amazonaws.com",
                    "workmail.sa-east-1.amazonaws.com",
                    "workmail.me-south-1.amazonaws.com",
                    "workmail.ap-northeast-2.amazonaws.com",
                    "workmail.us-gov-east-1.amazonaws.com",
                    "workmail.us-west-2.amazonaws.com",
                    "workmail.us-gov-west-1.amazonaws.com",
                    "workmail.ca-central-1.amazonaws.com",
                    "workmail.ap-south-1.amazonaws.com",
                    "workmail.ap-northeast-3.amazonaws.com",
                    "workmail.cn-north-1.amazonaws.com.cn",
                    "workmail.ap-southeast-2.amazonaws.com",
                    "workmail.af-south-1.amazonaws.com",
                    "workmail.eu-west-2.amazonaws.com",
                    "workmail.eu-west-1.amazonaws.com",
                    "workmail.us-east-2.amazonaws.com",
                    "workmail.us-west-1.amazonaws.com",
                    "workmail.ap-south-2.amazonaws.com",
                    "workmail.ap-southeast-3.amazonaws.com",
                    "workmail.eu-south-2.amazonaws.com",
                    "workmail.eu-central-2.amazonaws.com",
                    "workmail.me-central-1.amazonaws.com",
                    "workmail.ap-southeast-4.amazonaws.com"
                ]
            },
            {
                "app_name": "Amazon WorkSpaces",
                "discovery_domains": [
                    "workspaces.ap-northeast-1.amazonaws.com",
                    "workspaces.ca-central-1.amazonaws.com"
                ],
                "id": 16346,
                "steering_domains": [
                    "workspaces.ap-northeast-1.amazonaws.com",
                    "workspaces.ca-central-1.amazonaws.com",
                    "workspaces.us-gov-west-1.amazonaws.com",
                    "workspaces.us-west-1.amazonaws.com",
                    "workspaces.us-east-1.amazonaws.com",
                    "workspaces.ap-east-1.amazonaws.com",
                    "workspaces.af-south-1.amazonaws.com",
                    "workspaces.ap-southeast-1.amazonaws.com",
                    "workspaces.sa-east-1.amazonaws.com",
                    "workspaces.eu-central-1.amazonaws.com",
                    "workspaces.eu-west-2.amazonaws.com",
                    "workspaces.ap-northeast-2.amazonaws.com",
                    "workspaces.cn-north-1.amazonaws.com.cn",
                    "workspaces.us-gov-east-1.amazonaws.com",
                    "workspaces.us-west-2.amazonaws.com",
                    "workspaces.us-east-2.amazonaws.com",
                    "workspaces.me-south-1.amazonaws.com",
                    "workspaces.ap-northeast-3.amazonaws.com",
                    "workspaces.eu-north-1.amazonaws.com",
                    "workspaces.eu-south-1.amazonaws.com",
                    "workspaces.ap-southeast-2.amazonaws.com",
                    "workspaces.eu-west-1.amazonaws.com",
                    "workspaces.eu-west-3.amazonaws.com",
                    "workspaces.cn-northwest-1.amazonaws.com.cn",
                    "workspaces.ap-south-1.amazonaws.com",
                    "workspaces-fips.us-gov-west-1.amazonaws.com",
                    "workspaces.ap-south-2.amazonaws.com",
                    "workspaces.ap-southeast-3.amazonaws.com",
                    "workspaces.eu-south-2.amazonaws.com",
                    "workspaces.eu-central-2.amazonaws.com",
                    "workspaces.me-central-1.amazonaws.com",
                    "workspaces.ap-southeast-4.amazonaws.com"
                ]
            }
        ],
        "status": "Success",
        "status_code": 200
    },
    {
        "data": [
            {
                "app_name": "Amazon MediaTailor",
                "discovery_domains": [
                    "api.mediatailor.ap-northeast-2.amazonaws.com",
                    "api.mediatailor.eu-north-1.amazonaws.com",
                    "api.mediatailor.us-west-1.amazonaws.com"
                ],
                "id": 57715,
                "steering_domains": [
                    "api.mediatailor.ap-northeast-2.amazonaws.com",
                    "api.mediatailor.eu-north-1.amazonaws.com",
                    "api.mediatailor.us-west-1.amazonaws.com",
                    "api.mediatailor.ap-northeast-3.amazonaws.com",
                    "api.mediatailor.eu-west-2.amazonaws.com",
                    "api.mediatailor.us-east-2.amazonaws.com",
                    "api.mediatailor.cn-northwest-1.amazonaws.com.cn",
                    "api.mediatailor.sa-east-1.amazonaws.com",
                    "api.mediatailor.eu-south-1.amazonaws.com",
                    "api.mediatailor.eu-central-1.amazonaws.com",
                    "api.mediatailor.us-west-2.amazonaws.com",
                    "api.mediatailor.us-gov-west-1.amazonaws.com",
                    "api.mediatailor.af-south-1.amazonaws.com",
                    "api.mediatailor.us-east-1.amazonaws.com",
                    "api.mediatailor.us-gov-east-1.amazonaws.com",
                    "api.mediatailor.ap-south-1.amazonaws.com",
                    "api.mediatailor.ap-northeast-1.amazonaws.com",
                    "api.mediatailor.eu-west-1.amazonaws.com",
                    "api.mediatailor.cn-north-1.amazonaws.com.cn",
                    "api.mediatailor.ap-east-1.amazonaws.com",
                    "api.mediatailor.ca-central-1.amazonaws.com",
                    "api.mediatailor.ap-southeast-1.amazonaws.com",
                    "api.mediatailor.me-south-1.amazonaws.com",
                    "api.mediatailor.eu-west-3.amazonaws.com",
                    "api.mediatailor.ap-southeast-2.amazonaws.com",
                    "api.mediatailor.ap-south-2.amazonaws.com",
                    "api.mediatailor.ap-southeast-3.amazonaws.com",
                    "api.mediatailor.eu-south-2.amazonaws.com",
                    "api.mediatailor.eu-central-2.amazonaws.com",
                    "api.mediatailor.me-central-1.amazonaws.com",
                    "api.mediatailor.ap-southeast-4.amazonaws.com"
                ]
            },
            {
                "app_name": "Amazon X-Ray",
                "discovery_domains": [
                    "xray.ap-northeast-1.amazonaws.com",
                    "xray.ca-central-1.amazonaws.com",
                    "xray.eu-west-3.amazonaws.com"
                ],
                "id": 57716,
                "steering_domains": [
                    "xray.ap-northeast-1.amazonaws.com",
                    "xray.ca-central-1.amazonaws.com",
                    "xray.eu-west-3.amazonaws.com",
                    "xray.us-east-1.amazonaws.com",
                    "xray.cn-north-1.amazonaws.com.cn",
                    "xray.me-south-1.amazonaws.com",
                    "xray.us-east-2.amazonaws.com",
                    "xray.us-west-2.amazonaws.com",
                    "xray.ap-east-1.amazonaws.com",
                    "xray.af-south-1.amazonaws.com",
                    "xray.ap-south-1.amazonaws.com",
                    "xray.ap-southeast-1.amazonaws.com",
                    "xray.eu-west-1.amazonaws.com",
                    "xray.eu-north-1.amazonaws.com",
                    "xray.ap-northeast-3.amazonaws.com",
                    "xray.sa-east-1.amazonaws.com",
                    "xray.cn-northwest-1.amazonaws.com.cn",
                    "xray.eu-west-2.amazonaws.com",
                    "xray.eu-central-1.amazonaws.com",
                    "xray.us-gov-west-1.amazonaws.com",
                    "xray.us-gov-east-1.amazonaws.com",
                    "xray.us-west-1.amazonaws.com",
                    "xray.ap-southeast-2.amazonaws.com",
                    "xray.eu-south-1.amazonaws.com",
                    "xray.ap-northeast-2.amazonaws.com",
                    "xray-fips.us-gov-east-1.amazonaws.com",
                    "xray-fips.us-gov-west-1.amazonaws.com",
                    "xray.ap-south-2.amazonaws.com",
                    "xray.ap-southeast-3.amazonaws.com",
                    "xray.eu-south-2.amazonaws.com",
                    "xray.eu-central-2.amazonaws.com",
                    "xray.me-central-1.amazonaws.com",
                    "xray.ap-southeast-4.amazonaws.com"
                ]
            },
            {
                "app_name": "Amazon SageMaker Runtime",
                "discovery_domains": [
                    "runtime.sagemaker.us-east-1.amazonaws.com",
                    "runtime.sagemaker.ap-northeast-3.amazonaws.com",
                    "runtime.sagemaker.sa-east-1.amazonaws.com",
                    "runtime.sagemaker.eu-west-2.amazonaws.com",
                    "runtime.sagemaker.eu-north-1.amazonaws.com",
                    "runtime.sagemaker.us-west-1.amazonaws.com",
                    "runtime.sagemaker.eu-west-1.amazonaws.com",
                    "runtime.sagemaker.eu-south-1.amazonaws.com",
                    "runtime.sagemaker.cn-north-1.amazonaws.com.cn",
                    "runtime.sagemaker.us-gov-west-1.amazonaws.com",
                    "runtime.sagemaker.ap-south-1.amazonaws.com",
                    "runtime.sagemaker.cn-northwest-1.amazonaws.com.cn",
                    "runtime.sagemaker.ap-northeast-2.amazonaws.com",
                    "runtime.sagemaker.ap-northeast-1.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-2.amazonaws.com",
                    "runtime.sagemaker.eu-west-3.amazonaws.com",
                    "runtime.sagemaker.us-west-2.amazonaws.com",
                    "runtime.sagemaker.us-gov-east-1.amazonaws.com",
                    "runtime.sagemaker.af-south-1.amazonaws.com",
                    "runtime.sagemaker.me-south-1.amazonaws.com",
                    "runtime.sagemaker.eu-central-1.amazonaws.com",
                    "runtime.sagemaker.ca-central-1.amazonaws.com",
                    "runtime.sagemaker.ap-east-1.amazonaws.com",
                    "runtime.sagemaker.us-east-2.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-1.amazonaws.com",
                    "runtime.sagemaker.ap-south-2.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-3.amazonaws.com",
                    "runtime.sagemaker.eu-south-2.amazonaws.com",
                    "runtime.sagemaker.eu-central-2.amazonaws.com",
                    "runtime.sagemaker.me-central-1.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-4.amazonaws.com"
                ],
                "id": 57719,
                "steering_domains": [
                    "runtime.sagemaker.us-east-1.amazonaws.com",
                    "runtime.sagemaker.ap-northeast-3.amazonaws.com",
                    "runtime.sagemaker.sa-east-1.amazonaws.com",
                    "runtime.sagemaker.eu-west-2.amazonaws.com",
                    "runtime.sagemaker.eu-north-1.amazonaws.com",
                    "runtime.sagemaker.us-west-1.amazonaws.com",
                    "runtime.sagemaker.eu-west-1.amazonaws.com",
                    "runtime.sagemaker.eu-south-1.amazonaws.com",
                    "runtime.sagemaker.cn-north-1.amazonaws.com.cn",
                    "runtime.sagemaker.us-gov-west-1.amazonaws.com",
                    "runtime.sagemaker.ap-south-1.amazonaws.com",
                    "runtime.sagemaker.cn-northwest-1.amazonaws.com.cn",
                    "runtime.sagemaker.ap-northeast-2.amazonaws.com",
                    "runtime.sagemaker.ap-northeast-1.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-2.amazonaws.com",
                    "runtime.sagemaker.eu-west-3.amazonaws.com",
                    "runtime.sagemaker.us-west-2.amazonaws.com",
                    "runtime.sagemaker.us-gov-east-1.amazonaws.com",
                    "runtime.sagemaker.af-south-1.amazonaws.com",
                    "runtime.sagemaker.me-south-1.amazonaws.com",
                    "runtime.sagemaker.eu-central-1.amazonaws.com",
                    "runtime.sagemaker.ca-central-1.amazonaws.com",
                    "runtime.sagemaker.ap-east-1.amazonaws.com",
                    "runtime.sagemaker.us-east-2.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-1.amazonaws.com",
                    "runtime.sagemaker.ap-south-2.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-3.amazonaws.com",
                    "runtime.sagemaker.eu-south-2.amazonaws.com",
                    "runtime.sagemaker.eu-central-2.amazonaws.com",
                    "runtime.sagemaker.me-central-1.amazonaws.com",
                    "runtime.sagemaker.ap-southeast-4.amazonaws.com"
                ]
            }
        ],
        "status": "Success",
        "status_code": 200
    }
];
let domainValues = '';
result.map((item) => {
    domainValues = item.data.reduce((_acc, cur) => {
      return [..._acc,...cur.discovery_domains];
    }, []);
});
console.log('domainValues ', domainValues.join('\n'));
console.timeEnd('SLOW');
