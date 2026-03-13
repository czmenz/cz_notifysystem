if not _G.Notify then
    _G.Notify = function(type, title, message, duration)
        SendNUIMessage({
            action = 'notify',
            type = type,
            title = title,
            message = message,
            duration = duration or 5000
        })
    end
end


RegisterNetEvent('cz_notifysystem:notify')
AddEventHandler('cz_notifysystem:notify', function(type, title, message, duration)
    SendNUIMessage({
        action = 'notify',
        type = type,
        title = title,
        message = message,
        duration = duration or 5000
    })
end)

function Notify(type, title, message, duration)
    SendNUIMessage({
        action = 'notify',
        type = type,
        title = title,
        message = message,
        duration = duration or 5000
    })
end

RegisterCommand('testnotify', function(source, args)
    local type = args[1] or 'info'
    Notify(type, 'Test Notification', 'This is test notification', 5000)
end, false)
