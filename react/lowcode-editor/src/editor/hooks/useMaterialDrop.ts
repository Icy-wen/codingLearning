import { useDrop } from 'react-dnd'
import { useComponentsStore } from '../stores/components'
import { useComponentConfigStore } from '../stores/component-config'
import {message} from 'antd';
export function useMaterialDrop(accept: string[], id: number) {
    const { addComponents } = useComponentsStore();
    const { componentsConfig } = useComponentConfigStore();
    const [messageApi, contextHolder] = message.useMessage();

    const [{ canDrop }, dropRef] = useDrop(() => ({
        accept,
        drop: (item: { type: string }, monitor) => {
            messageApi.success(item.type)
            const didDrop = monitor.didDrop();//是否被动冒泡接收其它组件
            if (didDrop) {
                return
            }
            //将该组件的对象植入到json中
            const props = componentsConfig?.[item.type]?.defaultProps;
            addComponents({
                id: new Date().getTime(),
                name: item.type,
                props: props,

            }, id)
        },
        //接收区域
        collect: (monitor) => (
            {
                canDrop: monitor.canDrop(),
            })


    }))
    return {
        canDrop,
        dropRef,
        contextHolder
    }
}