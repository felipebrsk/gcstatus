import NProgress from 'nprogress'
import { useEffect } from 'react'

function LoadingScreen() {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return (
    <div className="bg-theme-dark-900 flex items-center justify-center h-screen">
      <svg
        viewBox="0 0 83.33333333333334 80.44791006498106"
        className="loader">
        <g
          className="dash"
          transform="translate(-6.336396478521822, -7.746702692126948) scale(0.9682989365289326)"
          fill="#ffffff">
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M90.041,59.881c-3.754-14.32-8.081-23.74-18.047-26.447c-1.521-0.412-2.953-0.612-4.38-0.612   c-3.007,0-5.426,0.905-7.773,1.783c-2.157,0.807-4.566,1.692-7.9,1.992c0.432-4.761-0.388-7.032-1.184-9.223   c-0.606-1.669-1.179-3.245-1.318-6.071c-0.305-6.189,6.813-10.98,6.885-11.028c0.57-0.378,0.728-1.146,0.351-1.718   c-0.378-0.571-1.145-0.729-1.718-0.351c-0.341,0.225-8.369,5.609-7.994,13.22c0.157,3.199,0.852,5.108,1.464,6.794   c0.785,2.161,1.463,4.027,1.021,8.45c-0.001,0.013,0.001,0.025,0,0.037c-4.562-0.022-7.535-1.128-10.159-2.11   c-2.333-0.875-4.747-1.779-7.742-1.779c-1.429,0-2.864,0.201-4.385,0.615c-9.975,2.708-14.301,12.127-18.047,26.448   c-4.344,16.587-3.143,27.707,3.295,30.51c1.048,0.459,2.151,0.691,3.278,0.691c5.724,0,10.987-6.018,14.833-10.416l1.046-1.213   c3.135-3.666,9.7-5.768,18.012-5.768c9.039,0,14.593,1.779,18.009,5.774l1.048,1.215c3.841,4.392,9.101,10.404,14.829,10.404   c1.132,0,2.233-0.231,3.274-0.687C93.174,87.588,94.377,76.468,90.041,59.881z M85.414,87.363c-0.629,0.276-1.268,0.41-1.95,0.41   c-4.227,0-8.913-5.356-12.332-9.266l-1.037-1.203c-4.097-4.789-10.424-6.926-20.517-6.926c-9.28,0-16.76,2.523-20.52,6.921   l-1.039,1.203c-3.422,3.913-8.109,9.274-12.333,9.274c-0.667,0-1.326-0.141-1.956-0.416c-4.509-1.962-5.078-12.669-1.417-26.642   c3.445-13.178,7.276-21.805,15.712-24.096c1.238-0.336,2.39-0.499,3.52-0.499c2.397,0,4.437,0.764,6.597,1.574   c2.905,1.086,6.197,2.318,11.436,2.318c5.23,0,8.524-1.232,11.437-2.322c2.153-0.806,4.188-1.568,6.6-1.568   c1.132,0,2.281,0.163,3.514,0.497c8.427,2.29,12.26,10.918,15.713,24.096C90.495,74.692,89.923,85.399,85.414,87.363z"></path>
            <path d="M24.087,56.632h5.855v5.928c0,0.859,0.757,1.585,1.653,1.585s1.653-0.726,1.653-1.585v-5.928h6   c0.858,0,1.584-0.757,1.584-1.653s-0.726-1.653-1.584-1.653h-6v-5.928c0-0.859-0.757-1.585-1.653-1.585s-1.653,0.726-1.653,1.585   v5.928h-5.855c-0.859,0-1.584,0.757-1.584,1.653S23.229,56.632,24.087,56.632z"></path>
            <path d="M68.865,45.813c-1.481,0-2.687,1.205-2.687,2.687s1.205,2.687,2.687,2.687c1.48,0,2.686-1.205,2.686-2.687   S70.346,45.813,68.865,45.813z"></path>
            <path d="M68.865,59.038c-1.481,0-2.687,1.205-2.687,2.687s1.205,2.687,2.687,2.687c1.48,0,2.686-1.205,2.686-2.687   S70.346,59.038,68.865,59.038z"></path>
            <path d="M62.252,52.426c-1.48,0-2.686,1.205-2.686,2.686c0,1.481,1.205,2.688,2.686,2.688c1.481,0,2.687-1.206,2.687-2.688   C64.938,53.631,63.733,52.426,62.252,52.426z"></path>
            <path d="M75.478,52.426c-1.481,0-2.687,1.205-2.687,2.686c0,1.481,1.205,2.688,2.687,2.688c1.482,0,2.688-1.206,2.688-2.688   C78.165,53.631,76.96,52.426,75.478,52.426z"></path>
          </g>
        </g>
      </svg>
      <svg height="0" width="0" viewBox="0 0 0 0" className="loader">
        <g
          className="dash"
          transform="matrix(0.9682989365289326,0,0,0.9682989365289326,-6.336396478521822,-7.746702692126948)"
          fill="#ffffff">
          <g xmlns="http://www.w3.org/2000/svg">
            <path d="M90.041,59.881c-3.754-14.32-8.081-23.74-18.047-26.447c-1.521-0.412-2.953-0.612-4.38-0.612   c-3.007,0-5.426,0.905-7.773,1.783c-2.157,0.807-4.566,1.692-7.9,1.992c0.432-4.761-0.388-7.032-1.184-9.223   c-0.606-1.669-1.179-3.245-1.318-6.071c-0.305-6.189,6.813-10.98,6.885-11.028c0.57-0.378,0.728-1.146,0.351-1.718   c-0.378-0.571-1.145-0.729-1.718-0.351c-0.341,0.225-8.369,5.609-7.994,13.22c0.157,3.199,0.852,5.108,1.464,6.794   c0.785,2.161,1.463,4.027,1.021,8.45c-0.001,0.013,0.001,0.025,0,0.037c-4.562-0.022-7.535-1.128-10.159-2.11   c-2.333-0.875-4.747-1.779-7.742-1.779c-1.429,0-2.864,0.201-4.385,0.615c-9.975,2.708-14.301,12.127-18.047,26.448   c-4.344,16.587-3.143,27.707,3.295,30.51c1.048,0.459,2.151,0.691,3.278,0.691c5.724,0,10.987-6.018,14.833-10.416l1.046-1.213   c3.135-3.666,9.7-5.768,18.012-5.768c9.039,0,14.593,1.779,18.009,5.774l1.048,1.215c3.841,4.392,9.101,10.404,14.829,10.404   c1.132,0,2.233-0.231,3.274-0.687C93.174,87.588,94.377,76.468,90.041,59.881z M85.414,87.363c-0.629,0.276-1.268,0.41-1.95,0.41   c-4.227,0-8.913-5.356-12.332-9.266l-1.037-1.203c-4.097-4.789-10.424-6.926-20.517-6.926c-9.28,0-16.76,2.523-20.52,6.921   l-1.039,1.203c-3.422,3.913-8.109,9.274-12.333,9.274c-0.667,0-1.326-0.141-1.956-0.416c-4.509-1.962-5.078-12.669-1.417-26.642   c3.445-13.178,7.276-21.805,15.712-24.096c1.238-0.336,2.39-0.499,3.52-0.499c2.397,0,4.437,0.764,6.597,1.574   c2.905,1.086,6.197,2.318,11.436,2.318c5.23,0,8.524-1.232,11.437-2.322c2.153-0.806,4.188-1.568,6.6-1.568   c1.132,0,2.281,0.163,3.514,0.497c8.427,2.29,12.26,10.918,15.713,24.096C90.495,74.692,89.923,85.399,85.414,87.363z"></path>
            <path d="M24.087,56.632h5.855v5.928c0,0.859,0.757,1.585,1.653,1.585s1.653-0.726,1.653-1.585v-5.928h6   c0.858,0,1.584-0.757,1.584-1.653s-0.726-1.653-1.584-1.653h-6v-5.928c0-0.859-0.757-1.585-1.653-1.585s-1.653,0.726-1.653,1.585   v5.928h-5.855c-0.859,0-1.584,0.757-1.584,1.653S23.229,56.632,24.087,56.632z"></path>
            <path d="M68.865,45.813c-1.481,0-2.687,1.205-2.687,2.687s1.205,2.687,2.687,2.687c1.48,0,2.686-1.205,2.686-2.687   S70.346,45.813,68.865,45.813z"></path>
            <path d="M68.865,59.038c-1.481,0-2.687,1.205-2.687,2.687s1.205,2.687,2.687,2.687c1.48,0,2.686-1.205,2.686-2.687   S70.346,59.038,68.865,59.038z"></path>
            <path d="M62.252,52.426c-1.48,0-2.686,1.205-2.686,2.686c0,1.481,1.205,2.688,2.686,2.688c1.481,0,2.687-1.206,2.687-2.688   C64.938,53.631,63.733,52.426,62.252,52.426z"></path>
            <path d="M75.478,52.426c-1.481,0-2.687,1.205-2.687,2.686c0,1.481,1.205,2.688,2.687,2.688c1.482,0,2.688-1.206,2.688-2.688   C78.165,53.631,76.96,52.426,75.478,52.426z"></path>
          </g>
        </g>
        <g
          transform="matrix(3.87619018785388,0,0,3.87619018785388,99.65721033529961,-16.49793467823133)"
          fill="#ffffff">
          <path d="M4.3532 12.503599999999999 c-0.72058 0.019805 -1.2858 0.62916 -1.2858 1.35 l0 1.7365 c0 0.74302 0.61256 1.343 1.3602 1.3225 c0.72058 -0.019746 1.2858 -0.6291 1.2858 -1.35 l0 -0.11945 c0 -0.13529 -0.10971 -0.245 -0.245 -0.245 l-0.49 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -0.39199 c0 -0.081192 0.0658 -0.14699 0.14699 -0.14699 l2.793 0 c0.081192 0 0.14699 0.0658 0.14699 0.14699 l0 4.851 c0 0.27062 -0.21938 0.49 -0.49 0.49 l-5.586 0 c-0.54126 0 -0.98 -0.43876 -0.98 -0.98 l0 -8.624 c0 -0.54126 0.43876 -0.98 0.98 -0.98 l5.586 0 c0.27062 0 0.49 0.21938 0.49 0.49 l0 3.7729 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-1.9185 0 c-0.074668 0 -0.13861 -0.055956 -0.14586 -0.13029 c-0.06664 -0.68154 -0.65046 -1.2115 -1.3539 -1.1922 z M13.2104 13.385 c-0.76048 0 -1.3711 0.64168 -1.32 1.4131 c0.042538 0.64288 0.55484 1.1691 1.1964 1.2273 c0.62842 0.056992 1.1761 -0.3259 1.3708 -0.87578 c0.02082 -0.058906 0.075898 -0.098652 0.13838 -0.098652 l1.9954 0 c0.081192 0 0.14699 0.0658 0.14699 0.14699 l0 4.312 c0 0.27062 -0.21938 0.49 -0.49 0.49 l-5.586 0 c-0.54126 0 -0.98 -0.43876 -0.98 -0.98 l0 -8.624 c0 -0.54126 0.43876 -0.98 0.98 -0.98 l5.586 0 c0.27062 0 0.49 0.21938 0.49 0.49 l0 4.312 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-1.9953 0 c-0.062676 0 -0.1177 -0.040038 -0.13861 -0.09914 c-0.18193 -0.51322 -0.67144 -0.88088 -1.247 -0.88088 z M24.938200000000002 11.78 c-0.5977 0.079434 -1.072 0.56604 -1.136 1.1656 c-0.084922 0.7959 0.5366 1.4685 1.3152 1.4685 c0.05625 0 0.11162 -0.0035352 0.16602 -0.010391 c0.14611 -0.018418 0.27498 0.095508 0.27498 0.24276 l0 4.3736 c0 0.54126 -0.43876 0.98 -0.98 0.98 l-5.586 0 c-0.27062 0 -0.49 -0.21938 -0.49 -0.49 l0 -1.5487 c0 -0.09418 0.086836 -0.16199 0.1791 -0.14338 c0.084668 0.017051 0.17223 0.026074 0.2619 0.026074 c0.77862 0 1.4001 -0.67262 1.3153 -1.4685 c-0.064004 -0.59958 -0.53828 -1.0861 -1.136 -1.1656 c-0.11932 -0.015879 -0.23594 -0.015586 -0.34814 -0.0011719 c-0.1449 0.018574 -0.2721 -0.097168 -0.2721 -0.24324 l0 -4.5696 c0 -0.54126 0.43876 -0.98 0.98 -0.98 l5.586 0 c0.27062 0 0.49 0.21938 0.49 0.49 l0 1.7449 c0 0.09373 -0.08623 0.16199 -0.17811 0.14338 c-0.14053 -0.028476 -0.28914 -0.034706 -0.44216 -0.014375 z M34.2316 9.416 c0.081192 0 0.14699 0.0658 0.14699 0.14699 l0 6.762 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-1.029 0 c-0.6495 0 -1.176 0.5265 -1.176 1.176 l0 2.205 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-2.058 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -2.205 c0 -0.6495 -0.5265 -1.176 -1.176 -1.176 l-1.029 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -6.762 c0 -0.081192 0.0658 -0.14699 0.14699 -0.14699 l6.762 0 z M42.2186 9.416 c0.54126 0 0.98002 0.43876 0.98002 0.98 l0 9.457 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-1.4757 0 c-0.077714 0 -0.14063 -0.060664 -0.1466 -0.13813 c-0.07041 -0.90962 -0.8309 -1.6259 -1.7587 -1.6259 s-1.6883 0.71624 -1.7587 1.6259 c-0.0059766 0.07752 -0.068886 0.13813 -0.1466 0.13813 l-1.4757 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -9.457 c0 -0.54126 0.43876 -0.98 0.98 -0.98 l5.096 0 z M39.6706 14.267 c0.73068 0 1.323 -0.5923 1.323 -1.323 s-0.5923 -1.323 -1.323 -1.323 s-1.323 0.5923 -1.323 1.323 s0.5923 1.323 1.323 1.323 z M51.8716 9.416 c0.081192 0 0.14699 0.0658 0.14699 0.14699 l0 6.762 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-1.029 0 c-0.6495 0 -1.176 0.5265 -1.176 1.176 l0 2.205 c0 0.081192 -0.0658 0.14699 -0.14699 0.14699 l-2.058 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -2.205 c0 -0.6495 -0.5265 -1.176 -1.176 -1.176 l-1.029 0 c-0.081192 0 -0.14699 -0.0658 -0.14699 -0.14699 l0 -6.762 c0 -0.081192 0.0658 -0.14699 0.14699 -0.14699 l6.762 0 z M60.6916 9.416 c0.081192 0 0.14707 0.0658 0.14707 0.14699 l0 9.457 c0 0.54126 -0.43876 0.98 -0.98 0.98 l-5.096 0 c-0.54126 0 -0.98 -0.43876 -0.98 -0.98 l0 -9.457 c0 -0.081192 0.0658 -0.14699 0.14699 -0.14699 l2.891 0 c0.081192 0 0.14699 0.0658 0.14699 0.14699 l0 5.5233 c0 0.062676 -0.040038 0.1177 -0.09914 0.13861 c-0.51322 0.18193 -0.88088 0.67144 -0.88088 1.247 c0 0.76048 0.6416 1.3711 1.413 1.32 c0.64288 -0.042538 1.1691 -0.55482 1.2273 -1.1964 c0.057032 -0.62848 -0.3259 -1.1762 -0.87578 -1.3708 c-0.058848 -0.02082 -0.098594 -0.075898 -0.098594 -0.13838 l0 -5.5234 c0 -0.081192 0.0658 -0.14699 0.14699 -0.14699 l2.891 0 z M69.0382 11.78 c-0.5977 0.079434 -1.072 0.56604 -1.136 1.1656 c-0.084922 0.7959 0.5366 1.4685 1.3152 1.4685 c0.05625 0 0.11162 -0.0035352 0.16602 -0.010391 c0.14611 -0.018418 0.27498 0.095508 0.27498 0.24276 l0 4.3736 c0 0.54126 -0.43876 0.98 -0.98 0.98 l-5.586 0 c-0.27062 0 -0.49 -0.21938 -0.49 -0.49 l0 -1.5487 c0 -0.09418 0.086836 -0.16199 0.1791 -0.14338 c0.084668 0.017051 0.17223 0.026074 0.2619 0.026074 c0.77862 0 1.4001 -0.67262 1.3153 -1.4685 c-0.064004 -0.59958 -0.53828 -1.0861 -1.136 -1.1656 c-0.11932 -0.015879 -0.23594 -0.015586 -0.34814 -0.0011719 c-0.1449 0.018574 -0.2721 -0.097168 -0.2721 -0.24324 l0 -4.5696 c0 -0.54126 0.43876 -0.98 0.98 -0.98 l5.586 0 c0.27062 0 0.49 0.21938 0.49 0.49 l0 1.7449 c0 0.09373 -0.08623 0.16199 -0.17811 0.14338 c-0.14053 -0.028476 -0.28914 -0.034706 -0.44216 -0.014375 z"></path>
        </g>
      </svg>
    </div>
  )
}

export default LoadingScreen
