export enum StatusCodes{
    /// <summary>
        /// HTTP status code 100.
        /// </summary>
        Status100Continue = 100,

        /// <summary>
        /// HTTP status code 101.
        /// </summary>
        Status101SwitchingProtocols = 101,

        /// <summary>
        /// HTTP status code 102.
        /// </summary>
        Status102Processing = 102,

        /// <summary>
        /// HTTP status code 200.
        /// </summary>
        Status200OK = 200,

        /// <summary>
        /// HTTP status code 201.
        /// </summary>
        Status201Created = 201,

        /// <summary>
        /// HTTP status code 202.
        /// </summary>
        Status202Accepted = 202,

        /// <summary>
        /// HTTP status code 203.
        /// </summary>
        Status203NonAuthoritative = 203,

        /// <summary>
        /// HTTP status code 204.
        /// </summary>
        Status204NoContent = 204,

        /// <summary>
        /// HTTP status code 205.
        /// </summary>
        Status205ResetContent = 205,

        /// <summary>
        /// HTTP status code 206.
        /// </summary>
        Status206PartialContent = 206,

        /// <summary>
        /// HTTP status code 207.
        /// </summary>
        Status207MultiStatus = 207,

        /// <summary>
        /// HTTP status code 208.
        /// </summary>
        Status208AlreadyReported = 208,

        /// <summary>
        /// HTTP status code 226.
        /// </summary>
        Status226IMUsed = 226,

        /// <summary>
        /// HTTP status code 300.
        /// </summary>
        Status300MultipleChoices = 300,

        /// <summary>
        /// HTTP status code 301.
        /// </summary>
        Status301MovedPermanently = 301,

        /// <summary>
        /// HTTP status code 302.
        /// </summary>
        Status302Found = 302,

        /// <summary>
        /// HTTP status code 303.
        /// </summary>
        Status303SeeOther = 303,

        /// <summary>
        /// HTTP status code 304.
        /// </summary>
        Status304NotModified = 304,

        /// <summary>
        /// HTTP status code 305.
        /// </summary>
        Status305UseProxy = 305,

        /// <summary>
        /// HTTP status code 306.
        /// </summary>
        Status306SwitchProxy = 306, // RFC 2616, removed

        /// <summary>
        /// HTTP status code 307.
        /// </summary>
        Status307TemporaryRedirect = 307,

        /// <summary>
        /// HTTP status code 308.
        /// </summary>
        Status308PermanentRedirect = 308,

        /// <summary>
        /// HTTP status code 400.
        /// </summary>

        Status400BadRequest = 400,

        /// <summary>
        /// HTTP status code 401.
        /// </summary>
        Status401Unauthorized = 401,

        /// <summary>
        /// HTTP status code 402.
        /// </summary>
        Status402PaymentRequired = 402,

        /// <summary>
        /// HTTP status code 403.
        /// </summary>
        Status403Forbidden = 403,

        /// <summary>
        /// HTTP status code 404.
        /// </summary>
        Status404NotFound = 404,

        /// <summary>
        /// HTTP status code 405.
        /// </summary>
        Status405MethodNotAllowed = 405,

        /// <summary>
        /// HTTP status code 406.
        /// </summary>
        Status406NotAcceptable = 406,

        /// <summary>
        /// HTTP status code 407.
        /// </summary>
        Status407ProxyAuthenticationRequired = 407,

        /// <summary>
        /// HTTP status code 408.
        /// </summary>
        Status408RequestTimeout = 408,

        /// <summary>
        /// HTTP status code 409.
        /// </summary>
        Status409Conflict = 409,

        /// <summary>
        /// HTTP status code 410.
        /// </summary>
        Status410Gone = 410,

        /// <summary>
        /// HTTP status code 411.
        /// </summary>
        Status411LengthRequired = 411,

        /// <summary>
        /// HTTP status code 412.
        /// </summary>
        Status412PreconditionFailed = 412,

        /// <summary>
        /// HTTP status code 413.
        /// </summary>
        Status413RequestEntityTooLarge = 413, // RFC 2616, renamed

        /// <summary>
        /// HTTP status code 413.
        /// </summary>
        Status413PayloadTooLarge = 413, // RFC 7231

        /// <summary>
        /// HTTP status code 414.
        /// </summary>
        Status414RequestUriTooLong = 414, // RFC 2616, renamed

        /// <summary>
        /// HTTP status code 414.
        /// </summary>
        Status414UriTooLong = 414, // RFC 7231

        /// <summary>
        /// HTTP status code 415.
        /// </summary>
        Status415UnsupportedMediaType = 415,

        /// <summary>
        /// HTTP status code 416.
        /// </summary>
        Status416RequestedRangeNotSatisfiable = 416, // RFC 2616, renamed

        /// <summary>
        /// HTTP status code 416.
        /// </summary>
        Status416RangeNotSatisfiable = 416, // RFC 7233

        /// <summary>
        /// HTTP status code 417.
        /// </summary>
        Status417ExpectationFailed = 417,

        /// <summary>
        /// HTTP status code 418.
        /// </summary>
        Status418ImATeapot = 418,

        /// <summary>
        /// HTTP status code 419.
        /// </summary>
        Status419AuthenticationTimeout = 419, // Not defined in any RFC

        /// <summary>
        /// HTTP status code 422.
        /// </summary>
        Status421MisdirectedRequest = 421,

        /// <summary>
        /// HTTP status code 422.
        /// </summary>
        Status422UnprocessableEntity = 422,

        /// <summary>
        /// HTTP status code 423.
        /// </summary>
        Status423Locked = 423,

        /// <summary>
        /// HTTP status code 424.
        /// </summary>
        Status424FailedDependency = 424,

        /// <summary>
        /// HTTP status code 426.
        /// </summary>
        Status426UpgradeRequired = 426,

        /// <summary>
        /// HTTP status code 428.
        /// </summary>
        Status428PreconditionRequired = 428,

        /// <summary>
        /// HTTP status code 429.
        /// </summary>
        Status429TooManyRequests = 429,

        /// <summary>
        /// HTTP status code 431.
        /// </summary>
        Status431RequestHeaderFieldsTooLarge = 431,

        /// <summary>
        /// HTTP status code 451.
        /// </summary>
        Status451UnavailableForLegalReasons = 451,

        /// <summary>
        /// HTTP status code 500.
        /// </summary>

        Status500InternalServerError = 500,

        /// <summary>
        /// HTTP status code 501.
        /// </summary>
        Status501NotImplemented = 501,

        /// <summary>
        /// HTTP status code 502.
        /// </summary>
        Status502BadGateway = 502,

        /// <summary>
        /// HTTP status code 503.
        /// </summary>
        Status503ServiceUnavailable = 503,

        /// <summary>
        /// HTTP status code 504.
        /// </summary>
        Status504GatewayTimeout = 504,

        /// <summary>
        /// HTTP status code 505.
        /// </summary>
        Status505HttpVersionNotsupported = 505,

        /// <summary>
        /// HTTP status code 506.
        /// </summary>
        Status506VariantAlsoNegotiates = 506,

        /// <summary>
        /// HTTP status code 507.
        /// </summary>
        Status507InsufficientStorage = 507,

        /// <summary>
        /// HTTP status code 508.
        /// </summary>
        Status508LoopDetected = 508,

        /// <summary>
        /// HTTP status code 510.
        /// </summary>
        Status510NotExtended = 510,

        /// <summary>
        /// HTTP status code 511.
        /// </summary>
        Status511NetworkAuthenticationRequired = 511,


}