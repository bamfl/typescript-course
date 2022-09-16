enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
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

interface IPaymentFailedData extends IPayment {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccesPayment {
  status: PaymentStatus.SUCCESS;
  data: IPaymentSuccessData
}

interface IResponseFailedPayment {
  status: PaymentStatus.FAILED;
  data: IPaymentFailedData
}
