enum IPaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

enum IPaymentErrorCode {
  NOT_ENOUGTH_MONEY = 4
}

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment { }

interface IPaymentSuccessData extends IPayment {
  databaseId: number;
}

interface IPaymentErrorData {
  errorMessage: string;
  errorCode: IPaymentErrorCode;
}

interface IPaymentSuccessResponse {
  status: IPaymentStatus.SUCCESS;
  data: IPaymentSuccessData
}

interface IPaymentErrorResponse {
  status: IPaymentStatus.FAILED;
  data: IPaymentErrorData
}

type Resp = IPaymentSuccessResponse | IPaymentErrorResponse;

type f = (res: Resp) => number | never;

const getPaymentId = async (res: Resp): Promise<number | never> => {
  if (res.status === IPaymentStatus.SUCCESS) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
