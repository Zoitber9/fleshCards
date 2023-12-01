import s from './loader.module.scss'

const { overlay, loader } = s

export const Loader = () => {
  return (
    <div className={overlay}>
      <div className={loader}></div>
    </div>
  )
}
